import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/outline";

const Note = ({ id, text, date, handleDeleteNote }) => {
  const [color] = useState(getRandomColor());

  function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 50) + 50;
    const lightness = Math.floor(Math.random() * 20) + 60;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }
  return (
    <div
      className="note"
      style={{
        backgroundColor: color,
        boxShadow: `2px 2px 10px rgba(0, 0, 0, 0.3)`,
      }}
    >
      <span>{text}</span>
      <footer className="custom-footer">
        <p>{date}</p>
        <TrashIcon
          onClick={() => handleDeleteNote(id)}
          className="delete-icon h-6 w-6 cursor-pointer"
        />
      </footer>
    </div>
  );
};

export default Note;
