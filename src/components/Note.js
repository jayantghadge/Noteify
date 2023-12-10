import React, { useState, useRef } from "react";
import { TrashIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import html2canvas from "html2canvas";

const Note = ({ id, text, date, handleDeleteNote }) => {
  const [color] = useState(getRandomColor());
  const noteRef = useRef(null);

  function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    const saturation = Math.floor(Math.random() * 50) + 50;
    const lightness = Math.floor(Math.random() * 20) + 60;
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }

  //download note
  const handleDownloadNoteAsImage = () => {
    const element = noteRef.current;
    const trashIcon = element.querySelector(".delete-icon");
    const downloadIcon = element.querySelector(".download-icon");

    downloadIcon.style.display = "none";
    trashIcon.style.display = "none";

    html2canvas(element).then((originalCanvas) => {
      downloadIcon.style.display = "block";
      trashIcon.style.display = "block";

      const newCanvas = document.createElement("canvas");
      newCanvas.width = originalCanvas.width;
      newCanvas.height = originalCanvas.height + 20;

      const ctx = newCanvas.getContext("2d");

      // Draw the content of the original canvas
      ctx.drawImage(
        originalCanvas,
        0,
        0,
        originalCanvas.width,
        originalCanvas.height,
        0,
        0,
        originalCanvas.width,
        originalCanvas.height
      );

      const imgData = newCanvas.toDataURL("image/jpeg");

      const link = document.createElement("a");
      link.href = imgData;
      link.download = `note_${id}.jpg`;
      link.click();
    });
  };

  return (
    <div
      className="note"
      style={{
        backgroundColor: color,
        boxShadow: `2px 2px 10px rgba(0, 0, 0, 0.3)`,
      }}
      ref={noteRef}
    >
      <span>{text}</span>
      <footer className="custom-footer">
        <p>{date}</p>
        <TrashIcon
          onClick={() => handleDeleteNote(id)}
          className="delete-icon h-6 w-6 cursor-pointer"
        />
        <ArrowDownTrayIcon
          onClick={handleDownloadNoteAsImage}
          className="download-icon h-6 w-6 cursor-pointer"
        />
      </footer>
    </div>
  );
};

export default Note;
