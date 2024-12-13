import React, { useContext, useState } from "react";
import headlinelogo from "../Assets/nav-top-logo.png";
import logo from "../Assets/Logo.png";
import search from "../Assets/search.svg";
import bag from "../Assets/bag.svg";
import profile from "../Assets/user.svg";
import heart from "../Assets/heart.svg";
import menu from "../Assets/hamber.svg";
import { Badge } from "@mui/material";
import "./css/Navbar.css";
import { DataContext } from "../context/Dataprovider";
const Navbar = () => {
  const [menuclass, setMenu] = useState("toggleSidebar");
  const { cart } = useContext(DataContext);
  const handlemenu = () => {
    setMenu("zindex3");
  };
  const handlemenuclose = () => {
    setMenu("toggleSidebar");
  };
  return (
    <nav>
      <section className="top">
        <span className="headline left-m">
          <img className="headline-logo" src={headlinelogo} />
          <span>Lorem ipsum dolor</span>
        </span>
        <span className="headline">
          <img className="headline-logo" src={headlinelogo} />{" "}
          <span>Lorem Ipsum Dolor </span>
        </span>
        <span className="headline right-m">
          <img className="headline-logo" src={headlinelogo} />{" "}
          <span>Lorem Ipsum Dolor</span>
        </span>
      </section>
      <section className="bottom-nav">
        <div className="bottom-nav-utility">
          <span className="logo">
            <img className="menu" src={menu} alt="menu" onClick={handlemenu} />
            <img src={logo} alt="logo" />
          </span>
          <aside className={menuclass}>
            <div className="sibebarlogo">
              <span>LOGO</span>
              <span onClick={handlemenuclose}>X</span>
            </div>
            <div className="signup">Sign Up</div>
            <div className="signin">Sign in</div>
            <div className="abt">About</div>
            <div className="skills">Skills</div>
            <div className="stories">Stories</div>
            <div className="contactus">Contact Us</div>
          </aside>
          <div className="nav-utilities" style={{ cursor: "pointer" }}>
            <img
              className="img search"
              src={search}
              alt="search"
              style={{ cursor: "pointer" }}
            />
            <Badge badgeContent={cart?.length} color="secondary">
                <img className="img like" src={heart} alt="like" />
            </Badge>
            <img className="img bag" src={bag} alt="bag" />
            <img className="img profile" src={profile} alt="profile" />
            {/* <img className="img lang" src={Language} alt="lang" /> */}
            <select name="languages" id="languages" className="lang">
              <option value="ENG">ENG</option>
              <option value="ESP">ESP</option>
              <option value="FRA">FRA</option>
            </select>
          </div>
        </div>
        <span className="website-name">LOGO</span>

        <div className="nav-links">
          <ul>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">SKILLS</a>
            </li>
            <li>
              <a href="#">STORIES</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">CONTACT US</a>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
