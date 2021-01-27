import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [noteList, setNoteList] = useState([]); //Array that will hold the notes

  function addNote (note) {
    setNoteList((prevItem) => {
      return [...prevItem, note]; //Push new notes over old notes in Array
    });
  }

  //Delete note
  function deleteNote(id) {
    setNoteList((prev) => {
      return prev.filter((note, index) => {
        return index !== id;
      });
    });
  }
  
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {noteList.map((note, index) => {
        return <Note 
                  key={index} 
                  id={index}
                  title={note.title} 
                  content={note.content} 
                  onDelete={deleteNote}
                />
      })}      
      <Footer />
    </div>
  );
}

export default App;
