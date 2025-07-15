import { useState } from "react";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";
import "./show_added_item.css"
export function TodoList({ userName, onEdit, onDelete, onComplete }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const startEditing = (index) => {
    setEditIndex(index);
    setEditText(userName[index].text);
  };

  const saveEdit = () => {
    if (editText.trim() !== "") {
      onEdit(editIndex, editText);
      setEditIndex(null);
      setEditText("");
    }
  };

  return (
    <>
      <h2>Added Items</h2>
      <ul className="item-list">
        {userName.map((item, index) => (
          <li
            className={`item-list-li ${item.completed ? "completed" : ""}`}
            key={index}
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => onComplete(index)}
            />

            {editIndex === index ? (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"
                />
                <button className="save-btn" onClick={saveEdit}>
                  <FaSave />
                </button>
              </>
            ) : (
              <div className="container">
                <span className="item-text">{item.text}</span>
                <span className="action-buttons">
                  <button className="edit-btn" onClick={() => startEditing(index)}>
                    <FaEdit />
                  </button>
                  <button className="delete-btn" onClick={() => onDelete(index)}>
                    <FaTrash />
                  </button>
                </span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
