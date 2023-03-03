import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
        <h5>About us</h5>
        <Link to='/about/info'>Подробная информация</Link>
    </div>
  )
}
