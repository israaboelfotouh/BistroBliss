import React from "react";
import "./Footer.css";
import logowhite from "../../Img/LogoWhite.png";
import footerimg1 from "../../Img/footerImg1.png";
import footerimg2 from "../../Img/footerImg2.png";
import footerimg3 from "../../Img/footerImg3.png";
import footerimg4 from "../../Img/footerImg4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer>
      <div className="container ">
        <div className="footer_contant ">
          <div className="footer_logo">
            <h3>
              <img src={logowhite} alt="logowhite" />
            </h3>
            <div>
              <p>
                In the new era of technology we look a in the future with
                certainty and pride to for our company and.
              </p>
              <div className="footer_left">
                <div className="footer_left_icone">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="footer_left_icone">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className="footer_left_icone">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="footer_left_icone">
                  <FontAwesomeIcon icon={faGithub} />
                </div>
              </div>
            </div>
          </div>

          <div className="footer_page">
            <h3>Pages</h3>
            <div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Delivery</li>
              </ul>
            </div>
          </div>
          <div>
            <h3>Utility Pages</h3>
            <div>
              <ul>
                <li>Start Here</li>
                <li>Styleguide</li>
                <li>Password Protected</li>
                <li>404 Not Found</li>
                <li>Licenses</li>
                <li>Changelog</li>
                <li>View More</li>
              </ul>
            </div>
          </div>
          <div className="footer_follow">
            <h3>Follow Us On Instagram</h3>
            <div className="footer_img">
              <img src={footerimg1} alt="footerimg1" />
              <img src={footerimg2} alt="footerimg2" />
              <img src={footerimg3} alt="footerimg3" />
              <img src={footerimg4} alt="footerimg4" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
