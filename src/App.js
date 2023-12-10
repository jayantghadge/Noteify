import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Header from "./components/Header";
import List from "./components/List";
import Search from "./components/SearchBar";
import Footer from "./components/Footer";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNotes = (text) => {
    // console.log(text);
    const date = new Date();
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString("en-GB", options),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const [searchText, setSearchText] = useState("");

  const deleteNode = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("noteify-data") || "[]");
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("noteify-data", JSON.stringify(notes));
  }, [notes]);

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="Container mx-auto min-h-[calc(100vh-85px)] max-w-screen-lg px-8">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <List
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNotes}
          handleDeleteNote={deleteNode}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
