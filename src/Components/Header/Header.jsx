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
  const phoneNumber = "(414) 857 - 0107";
  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const emailAddress = "yummy@bistrobliss";
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  return (
    <>
      <header>
        <div className="header_contant container">
          <div className="header_right">
            <div className="header_contact" onClick={handlePhoneClick}>
              <div className="icone_header_right">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <p>(414) 857 - 0107</p>
            </div>
            <div className="header_contact" onClick={handleEmailClick}>
              <div className="icone_header_right">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <p>yummy@bistrobliss</p>
            </div>
          </div>

          <div className="header_left">
            <div className="header_left_icone twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="header_left_icone facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="header_left_icone instgram">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="header_left_icone github">
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
