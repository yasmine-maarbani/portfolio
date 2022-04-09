import React from 'react'
/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";
import { useState } from "react";
import {MdExpandMore} from 'react-icons/md';
import {MdClose} from 'react-icons/md';

const Nav = () => {
  const [active, setActive] = useState("#");
  const[off,setOff]=useState(true);
  return (
    <nav className={off ?  "offN" :"" }>
      <a
        href="#"
        className={off ? "off" :active === "#" ? "active" : ""}
        onClick={() => setActive("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={off ? "off" :active === "#about" ? "active" : ""}
        onClick={() => setActive("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={off ? "off" :active === "#experience" ? "active" : ""}
        onClick={() => setActive("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        className={off ? "off" :active === "#portfolio" ? "active" : ""}
        onClick={() => setActive("#portfolio")}
      >
        <AiOutlineAppstore />
      </a>
      <a
        href="#contact"
        className={off ? "off" :active === "#contact" ? "active" : ""}
        onClick={() => setActive("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
      <a className='nav-btn'
      onClick={() => setOff(!off)}>
        {off?<MdExpandMore />:<MdClose />}
      </a>
    </nav>

  )
}

export default Nav