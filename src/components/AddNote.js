import React from "react";
import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const charLimit = 200;

  const handleChange = (e) => {
    if (charLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note note-new">
      <textarea
        rows="8"
        cols="10"
        value={noteText}
        placeholder="Type to add a note..."
        onChange={handleChange}
      ></textarea>
      <div className="custom-footer">
        <p>{charLimit - noteText.length} Remaining</p>
        <button className="save" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
