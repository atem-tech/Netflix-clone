import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer-wrapper">
        <div className="internal-wrapper">
          <div className="links-wrapper-1">
            <div>
              <h3>Questions? Call 1-844-505-2993</h3>
              <br />
              <br />
            </div>
          </div>
          <div className="footer-links-wrapper">
            <div className="links-wrapper-2">
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Investers Relations</a>
                </li>
                <li>
                  <a href="#">Ways to Watch</a>
                </li>
                <li>
                  <a href="#">Corporate Information</a>
                </li>
                <li>
                  <a href="#">Only on Netflix</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-3">
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-4">
              <ul>
                <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Redeem Gift Cards</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Speed Test</a>
                </li>
              </ul>
            </div>
            <div className="links-wrapper-5">
              <ul>
                <li>
                  <a href="#">Media Center</a>
                </li>
                <li>
                  <a href="#">Buy Gift Cards</a>
                </li>
                <li>
                  <a href="#">Cookie Preferences</a>
                </li>
                <li>
                  <a href="#">Legal Notices</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright-wrapper">
            <div className="copyright">
              Copyright © 2019 Netflix Inc. All rights reserved.
            </div>

            <div className="footer-country">
              <div className="footer-country-name">United States</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
