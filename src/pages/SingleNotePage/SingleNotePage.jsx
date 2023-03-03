import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleNotePage() {
  const fetchNote = (id) => {
    return axios.get(`http://localhost:3001/notes/${id}`);
  };
  const { id } = useParams();
  const [note, setNote] = useState({});

  useEffect(() => {
    fetchNote(id)
      .then((resp) => setNote(resp.data))
      .catch((err) => console.log(err));
  },[]);

  return (
    <div>
      <h1>{note.text}</h1>
      <p>
        <b>Description:</b>
        {note.descr}
      </p>
      <p>
        <b>Amount of tasks:</b>
        {note.tasks}
      </p>
    </div>
  );
}
