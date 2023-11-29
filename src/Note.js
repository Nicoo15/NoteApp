// src/Note.js
import React from 'react';

const Note = ({ note, deleteNote, editNote }) => {
  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note.id)}>Eliminar Nota</button>
      <button onClick={() => editNote(note.id)}>Editar Nota</button>
    </div>
  );
};

export default Note;
