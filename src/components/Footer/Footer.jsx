import React from 'react'
import style from './footer.module.css'
import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";

export default function Footer() {
  return (
    <div className={style.container}>
      <p className={style.text}>&copy; Made by Panichkin Egor supported by Geeks</p>
      <ul className={style.list}>
        <li><a href="https://youtube.com"><SlSocialYoutube size={30}/></a></li>
        <li><a href="https://www.instagram.com"><SlSocialInstagram size={30}/></a></li>
        <li><a href="https://www.linkedin.com"><SlSocialLinkedin size={30}/></a></li>
      </ul>
    </div>
  )
}
