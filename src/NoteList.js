// src/NoteList.js
import React from 'react';
import Note from './Note';

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="note-list">
      <h2>Lista de Notas</h2>
      {notes.length === 0 ? (
        <p>No hay notas disponibles.</p>
      ) : (
        <ul>
          {notes.map(note => (
            <li key={note.id}>
              <Note note={note} deleteNote={deleteNote} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NoteList;
