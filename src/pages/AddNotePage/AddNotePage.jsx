import axios from "axios";
import React, { useState } from "react";
import s from "./addnote.module.css";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const addNote = (data) => {
  return axios.post("http://localhost:3001/notes", data);
};

export default function AddNotePage() {
  const [text, setText] = useState("");
  const [descr, setDescr] = useState("");
  const [tasks, setTasks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      text,
      descr,
      tasks,
    };
    addNote(newNote)
      .then((res) => {
        console.log(res);
        setText("");
        setDescr("");
        setTasks("");
        toast("Post created!")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={s.wrapper}>
      <h1>Add new post</h1>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.control}
          type="text"
          name=""
          id=""
          placeholder="Title"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          className={s.control}
          type="text"
          placeholder="Description"
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
        />
        <input
          className={s.control}
          type="text"
          placeholder="Tasks"
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
        />
        <input className={s.submit} type="submit" value="Create a post" />
      </form>
      <ToastContainer/>
    </div>
  );
}
