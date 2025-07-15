import { useState } from "react";
import { TodoList } from "./TodoList";

export function TodoItem(){

    const [item, setItem] = useState("");
  const [confirmedItem, setConfirmedItem] = useState([]);

  const handleEdit = (index, newText) => {
  const updated = [...confirmedItem];
  updated[index].text = newText;
  setConfirmedItem(updated);
};
const handleToggleComplete = (index) => {
  const updated = [...confirmedItem];
  updated[index].completed = !updated[index].completed;
  setConfirmedItem(updated);
};


  const addItem = () => {
    if (item.trim() !== "") {
      setConfirmedItem([...confirmedItem, { text: item, completed: false }]);
      setItem("");
    }
  };

  const handleDelete = (index) => {
    const updated = confirmedItem.filter((_, i) => i !== index);
    setConfirmedItem(updated);
  };
    return (
        <>
         <div className="input-button-div">
        <input
          className="input"
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          placeholder="Enter your item"
        />
        <button className="add-item" onClick={addItem}>
          Add Item
        </button>
      </div>

      <TodoList
        userName={confirmedItem}
        onEdit={handleEdit}
        onDelete={handleDelete}
onComplete = {handleToggleComplete}
      />
        
        </>
    )
}