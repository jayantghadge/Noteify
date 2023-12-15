import Note from "./Note";
import AddNote from "./AddNote";
const List = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note, index) => (
        <Note
          id={note.id}
          text={note.text}
          date={note.date}
          time={note.time}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default List;
