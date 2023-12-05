import React from 'react'
import style from './header.module.css'

export default function Header() {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
      </ul>
    </div>
  )
}
