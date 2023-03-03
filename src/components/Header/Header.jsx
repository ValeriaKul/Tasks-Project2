import React from 'react'
import { Link } from 'react-router-dom';
import s from './header.module.css';

export default function Header() {
  return (
    <div>
        <nav className={s.navigation}>
            <Link to = '/'>Main</Link>
            <Link to = '/about'>About us</Link>
            <Link to = '/contacts'>Contacts</Link>
            <Link to = '/addnote'>Add New Note</Link>
         </nav>

    </div>
  )
}


