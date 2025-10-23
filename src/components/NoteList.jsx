const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return <p className="no-notes">No Notes yet</p>;
  }

  return (
    <div className="shownotes">
      {notes.map((note) => (
        <div
          key={note.id}
          className="note"
          style={{
            borderLeft:
              note.priority === "high"
                ? "4px solid red"
                : note.priority === "medium"
                ? "4px solid orange"
                : "4px solid green",
          }}
        >
          <div className="note-header">
            <h3 className="title">{note.title}</h3>
            <button onClick={() => deleteNote(note.id)} className="btn-delete">
              🗑️ Delete
            </button>
          </div>

          <p className="category">Category: {note.category}</p>
          <p className="priority">Priority: {note.priority}</p>
          <p className="description">{note.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
