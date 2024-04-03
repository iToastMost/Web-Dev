import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      <dl>
      {notes.map(note => (
        <Note 
        key={note.key}
        content={note.content}
        title={note.title}
        />
      ))};
      </dl>
      <Footer />
    </div>
  );
}

export default App;
