// src/NoteEditor.js
import React, { useState, useEffect, useRef } from 'react';

const NoteEditor = ({ addNote, selectedNote, clearSelectedNote, saveEditedNote }) => {
  const [note, setNote] = useState({ title: '', content: '' });
  const contentInputRef = useRef(null);

  useEffect(() => {
    if (selectedNote) {
      setNote({ title: selectedNote.title, content: selectedNote.content });
      contentInputRef.current.focus();
    }
  }, [selectedNote]);

  const handleInputChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdateNote = () => {
    if (note.title && note.content) {
      if (selectedNote) {
        // Editar nota existente
        saveEditedNote({ id: selectedNote.id, ...note });
        clearSelectedNote();
      } else {
        // Agregar nueva nota
        addNote(note);
      }

      setNote({ title: '', content: '' });
      contentInputRef.current.focus();
    }
  };

  return (
    <div className="note-editor">
      <h2>{selectedNote ? 'Editar Nota' : 'Nueva Nota'}</h2>
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={note.title}
        onChange={handleInputChange}
      />
      <textarea
        ref={contentInputRef}
        name="content"
        placeholder="Contenido"
        value={note.content}
        onChange={handleInputChange}
      />
      <button onClick={handleAddOrUpdateNote}>{selectedNote ? 'Editar' : 'Agregar'} Nota</button>
    </div>
  );
};

export default NoteEditor;
