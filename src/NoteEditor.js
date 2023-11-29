// src/NoteEditor.js
import React, { useState, useRef } from 'react';

const NoteEditor = ({ addNote }) => {
  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const contentInputRef = useRef(null);

  const handleInputChange = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  };

  const handleAddNote = () => {
    if (newNote.title && newNote.content) {
      addNote(newNote);
      setNewNote({ title: '', content: '' });
      // Opcionalmente, enfocar el campo de texto después de agregar una nota
      contentInputRef.current.focus();
    }
  };

  return (
    <div className="note-editor">
      <h2>Editor de Notas</h2>
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={newNote.title}
        onChange={handleInputChange}
      />
      <textarea
        ref={contentInputRef}
        name="content"
        placeholder="Contenido"
        value={newNote.content}
        onChange={handleInputChange}
      />
      <button onClick={handleAddNote}>Agregar Nota</button>
    </div>
  );
};

export default NoteEditor;
