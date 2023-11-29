// src/Note.js
import React from 'react';

const Note = ({ note, deleteNote }) => {
  return (
    <div className="note">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => deleteNote(note.id)}>Eliminar Nota</button>
    </div>
  );
};

export default Note;
