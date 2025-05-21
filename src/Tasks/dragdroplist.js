import { useState } from "react";

export default function DragDropList() {
  const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);
  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (dropIndex) => {
    const newItems = [...items];
    const draggedItem = newItems[dragIndex];

    newItems.splice(dragIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);

    setItems(newItems);
    setDragIndex(null);
  };

  return (
    <div>
      <h3>Drag and Drop to Reorder</h3>
      <ul>
        {items.map((item, i) => (
          <li
            key={i}
            draggable
            onDragStart={() => handleDragStart(i)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(i)}
            style={{
              border: "1px solid gray",
              margin: "8px",
              padding: "8px",
              backgroundColor: "#f0f0f0",
              cursor: "grab",
              listStyleType: "none",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
