import React from 'react'
import s from './note.module.css';

export default function Note(props) {
  return (
    <div className={s.note}>
        <h5 className={s.title}>{props.title}</h5>
        <p className={s.descr}>{props.descr}</p>
    </div>
  )
}
