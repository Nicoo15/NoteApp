// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './Header';
import NoteList from './NoteList';
import NoteEditor from './NoteEditor';
import './index.css';

const App = () => {
  const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  const [notes, setNotes] = useState(storedNotes);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNote, setSelectedNote] = useState(null);

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

  const editNote = (id) => {
    const noteToEdit = notes.find(note => note.id === id);
    setSelectedNote(noteToEdit);
  };

  const saveEditedNote = (editedNote) => {
    const updatedNotes = notes.map(note =>
      note.id === editedNote.id ? editedNote : note
    );
    setNotes(updatedNotes);
    setSelectedNote(null);
  };

  const clearSelectedNote = () => {
    setSelectedNote(null);
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
        <NoteList notes={filteredNotes} deleteNote={deleteNote} editNote={editNote} />
        <NoteEditor addNote={addNote} selectedNote={selectedNote} saveEditedNote={saveEditedNote} clearSelectedNote={clearSelectedNote} />
      </div>
    </div>
  );
};

export default App;
