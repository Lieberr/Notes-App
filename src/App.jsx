import NotesForm from "./components/NotesForm";
import { useState } from "react";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);
  const deleteNote = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want delete this note ?"
    );

    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <>
      <div className="container">
        <h2 className="notes">📝 Notes</h2>
        <NotesForm notes={notes} setNotes={setNotes} />
        <NoteList notes={notes} deleteNote={deleteNote} />
      </div>
    </>
  );
};
export default App;
