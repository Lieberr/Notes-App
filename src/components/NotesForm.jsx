import { useState } from "react";

const NotesForm = ({ notes, setNotes }) => {
  const [value, setValue] = useState({
    title: "",
    priority: "medium",
    category: "work",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleNotes = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //validar
    if (!value.title || !value.description) return;

    //criar novo obj

    const newNotes = {
      id: Date.now(),
      ...value,
    };

    //add notes to state

    setNotes([newNotes, ...notes]);

    //reset

    setValue({
      title: "",
      priority: "medium",
      category: "work",
      description: "",
    });
  };

  return (
    <>
      <button onClick={() => setIsFormVisible(!isFormVisible)} className="btn">
        {isFormVisible ? "Hide Form ✖️" : "Add New Note ✅"}
      </button>

      {isFormVisible && (
        <form onSubmit={handleSubmit} className="forms">
          <div className="inputs">
            <label htmlFor="title" className="title">
              Title
            </label>
            <input
              type="text"
              className="input-title"
              value={value.title}
              name="title"
              onChange={handleNotes}
            />
          </div>

          <div className="inputs">
            <label htmlFor="priority" className="priority">
              Priority
            </label>
            <select
              name="priority"
              type="text"
              className="input-priority"
              value={value.priority}
              onChange={handleNotes}
            >
              <option value="high">🔴 High</option>
              <option value="medium">🟠 Medium</option>
              <option value="low">🟢 Low</option>
            </select>
          </div>

          <div className="inputs">
            <label htmlFor="category" className="category">
              Category
            </label>
            <select
              name="category"
              type="text"
              className="input-category"
              value={value.category}
              onChange={handleNotes}
            >
              <option value="work">Work</option>
              <option value="Personal">Personal</option>
              <option value="ideas">Ideas</option>
            </select>
          </div>

          <div className="inputs">
            <label htmlFor="description" className="description">
              Description
            </label>
            <textarea
              name="description"
              type="text"
              className="input-description"
              value={value.description}
              onChange={handleNotes}
            ></textarea>
          </div>

          <button className="submit-button">Add Note</button>
        </form>
      )}
    </>
  );
};

export default NotesForm;
