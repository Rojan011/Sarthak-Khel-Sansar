import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderNav = () => {
  const nav = useNavigate();
  const send = (e) => {
    nav(e);
  };
  return (
    <nav className="flex justify-between items-center p-4">
  <div className="text-start">
    Copyright © 2024. SARTHAK KHEL SANSAR. All Rights Reserved.
  </div>
  <div className="links flex space-x-3">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-facebook-f i-fb"></i>
    </a>
    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-twitter i-tw"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-linkedin i-ln"></i>
    </a>
    <a href="https://meta.com" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-vine i-vn"></i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <i className="fa fa-instagram i-ig"></i>
    </a>
  </div>
</nav>

  );
};

export default HeaderNav;
