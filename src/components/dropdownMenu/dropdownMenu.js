//source:https://codesandbox.io/s/trusting-dubinsky-k3mve?file=/src/Menu.js:60-80
//https://github.com/Pomax/react-onclickoutside
import React, { useEffect, useState, useRef } from "react";
import './dropdownMenu.scss';
import listenForOutsideClick from "./listen-for-outside-clicks";

export default function DropdownMenu() {
  const menuRef = useRef(null);
  const [listening, setListening] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(listenForOutsideClick(listening, setListening, menuRef, setIsOpen));

  return (
    <div ref={menuRef} className={isOpen ? "m-menu -active" : "m-menu "}>
      <div onClick={toggle}> Open Menu </div>
      <ul className="m-menu__list">
        <li className="m-menu__item">
          <div className="m-menu__link">Log Out</div>
        </li>
      </ul>
    </div>
  );
};