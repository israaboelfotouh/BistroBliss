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
    // window.location.href = `tel:${phoneNumber}`;

    const link = document.createElement("a");
    link.href = `tel:${phoneNumber}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const emailAddress = "yummybistrobliss@gmail.com";
  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  const handleTwitterClick = () => {
    // this tab
    // window.location.href =
    //   "https://x.com/Israaboelfotouh?t=573R_Jk5j_rwVn9H88Jcnw&s=09 ";
    // new tab
    window.open(
      "https://x.com/Israaboelfotouh?t=573R_Jk5j_rwVn9H88Jcnw&s=09",
      "_blank"
    );
  };
  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/israaboelfotouh", "_blank");
  };
  const handleInstgramClick = () => {
    window.open("https://www.instagram.com/israaboelfotouh/", "_blank");
  };
  const handleGitClick = () => {
    window.open("https://github.com/israaboelfotouh", "_blank");
  };
  return (
    <>
      <header>
        <div className="header_contant container">
          <div className="header_right">
            <div
              className="header_contact"
              onClick={handlePhoneClick}
              onTouchStart={handlePhoneClick}
            >
              <div className="icone_header_right">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <p>(414) 857 - 0107</p>
            </div>
            <div
              className="header_contact"
              onClick={handleEmailClick}
              onTouchStart={handleEmailClick}
            >
              <div className="icone_header_right">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <p>yummy@bistrobliss</p>
            </div>
          </div>

          <div className="header_left">
            <div
              className="header_left_icone twitter"
              onClick={handleTwitterClick}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div
              className="header_left_icone facebook"
              onClick={handleFacebookClick}
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div
              className="header_left_icone instgram"
              onClick={handleInstgramClick}
            >
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="header_left_icone github" onClick={handleGitClick}>
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
