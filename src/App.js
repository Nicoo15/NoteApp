// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import './index.css'; // Asegúrate de que la importación del estilo sea correcta

const App = () => {
  const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  const [notes, setNotes] = useState(storedNotes);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes([...notes, { id: Date.now(), ...newNote }]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header setSearchTerm={setSearchTerm} />
      <div className="app-content">
        <NoteList notes={filteredNotes} deleteNote={deleteNote} />
        <NoteEditor addNote={addNote} />
      </div>
    </div>
  );
};

export default App;
