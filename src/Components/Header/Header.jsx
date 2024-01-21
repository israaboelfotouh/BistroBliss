import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
export default function Header() {
  return (
    <>
      <header>
        <div className="header_contant container">
          <div className="header_right">
            <div className="header_contact">
              <div className="icone_header_right">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <p>(414) 857 - 0107</p>
            </div>
            <div className="header_contact">
              <div className="icone_header_right">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <p>yummy@bistrobliss</p>
            </div>
          </div>

          <div className="header_left">
            <div className="heaser_left_icone">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="heaser_left_icone">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="heaser_left_icone">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="heaser_left_icone">
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
