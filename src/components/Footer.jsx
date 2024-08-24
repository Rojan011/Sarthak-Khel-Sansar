import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";

const Footer = () => {
  const [Links, setLinks] = useState(false);
  const [Gallery, setGallery] = useState(false);
  const [Contact, setContact] = useState(false);
  return (
    <footer>
      <section class="contact">
        <div class="contact-1">
          <i class="fa fa-phone" id="call" aria-hidden="true"></i>
          <p class="question">DO YOU HAVE A QUESTION?</p>
          <p class="number">+977 9867053549</p>
        </div>
        <div class="contact-2">
          <div>
            <i class="fa fa-envelope-o" id="mail" aria-hidden="true"></i>
            <input
              type="search"
              placeholder="Enter email"
              className="text-black"
            />
          </div>
          <button
            onClick={() => {
              alert("subscribed!!!");
            }}
          >
            Subscribe
          </button>
        </div>
      </section>

      <section class="footer">
        <div class="footer-content">
          <div class="footer-about">
            <h1>OUR VISION</h1>
            <p>
              Our mission at Sarthak Khel Sansar is to transform lives and
              uplift communities through the power of play. We strive to create
              inclusive, supportive environments where individuals of all ages
              can engage in sports and recreational activities that foster
              physical health, emotional well-being, and social connections.
            </p>
            <br />
            <p>
              By harnessing the joy and educational potential of play, we aim to
              empower individuals, promote lifelong learning, and build
              stronger, more resilient communities. We are dedicated to ensuring
              that everyone, regardless of their background or abilities, has
              the opportunity to thrive and reach their full potential.
            </p>
          </div>
{/* 
          <div class="footer-links">
            <h2
              class="links"
              onClick={() => {
                setLinks(!Links);
              }}
            >
              QUICK LINKS
            </h2>
            <br />
            <ul class={"footer-links-ul " + (Links && "active-links")}>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="/">Home</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="about">About</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="causes">Causes</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="event">Events</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="news">News</Link>
              </li>
              <li>
                <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                <Link to="contact">Contact</Link>
              </li>
            </ul>
          </div> */}

          {/* <div class="gallery">
            <h2
              class="gal-btn"
              onClick={() => {
                setGallery(!Gallery);
              }}
            >
              GALLERY
            </h2>
            <div class={"gal-container " + (Gallery && "gal-container-active")}>
              <div>
                <img src="assets/ga1.png" />
                <img src="assets/ga2.png" />
              </div>
              <div>
                <img src="assets/gap3.png" />
                <img src="assets/gal4.png" />
              </div>
              <div>
                <img src="assets/gal5.png" />
                <img src="assets/gal6.png" />
              </div>
            </div>
          </div> */}

          <div class="contact-footer">
            <h2
              class="contact-btn"
              onClick={() => {
                setContact(!Contact);
              }}
            >
              CONTACT US
            </h2>

            <div
              class={
                "contact-container " + (Contact && "contact-container-active")
              }
            >
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-map-marker one" aria-hidden="true"></i>
                  </div>
                  <h3>Head Office</h3>
                </div>
                <div class="contact-ad">
                  <p>123, Main Street, Your City</p>
                  <p>USA 789456</p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-phone two" aria-hidden="true"></i>
                  </div>
                  <h3>Phone Number</h3>
                </div>
                <div class="contact-ad">
                  <p>123, Main Street, Your City</p>
                  <p>USA 789456</p>
                </div>
              </div>
              <div class="contact-card">
                <div class="contact-heading">
                  <div class="location">
                    <i class="fa fa-envelope three" aria-hidden="true"></i>
                  </div>
                  <h3>Email</h3>
                </div>
                <div class="contact-ad">
                  <p>123, Main Street, Your City</p>
                  <p>USA 789456</p>
                </div>
              </div>
            </div>
          </div>
          <HeaderNav/>
          {/* <p class="copyright">
            Copyright @ 2024. SARTHAK KHEL SANSAR . All Rights Reserved.
          </p> */}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
