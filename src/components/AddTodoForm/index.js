import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Note from "../../modals/notes";
import TodoList from "../TodoList";
import NotesForm from "./components/Form";
import nextId from "react-id-generator";
import {
  onDeleteHandler,
  onMarkedHandler,
  getItemsFromLocalStorage,
} from "./handler";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const AddToDoForm = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const onHandleSubmit = (e) => {
    e.preventDefault();
    const newNote = new Note(nextId(), title, text);
    setNotes([...notes, newNote]);
  };

  useEffect(() => {
    setNotes(getItemsFromLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem(`notes`, JSON.stringify(notes));
  }, [notes]);

  return (
    <ThemeProvider theme={theme}>
      <Typography variant='h2' align='center'>
        ToDo List
      </Typography>
      <NotesForm
        buttonFormHandler={onHandleSubmit}
        textChange={(e) => setText(e.target.value)}
        titleChange={(e) => setTitle(e.target.value)}
      />

      <div>
        {notes.length !== 0 ? (
          notes.map((el) => (
            <TodoList
              key={el.id}
              title={el.title}
              name={el.text}
              marked={el.marked}
              deleteHandler={(e) => setNotes(onDeleteHandler(e, el.id, notes))}
              markedHandler={(e) => setNotes(onMarkedHandler(e, el.id, notes))}
            />
          ))
        ) : (
          <Typography variant='h6' align='center' sx={{ marginTop: 10 }}>
            You're Notes List is empty, please add some notes
          </Typography>
        )}
      </div>
    </ThemeProvider>
  );
};
export default AddToDoForm;
