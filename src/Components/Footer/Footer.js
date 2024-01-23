import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
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
const logofooter = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="56"
    height="55"
    viewBox="0 0 56 55"
    fill="none"
  >
    <g clip-path="url(#clip0_230_198)">
      <path
        d="M47.6694 0.803845C47.3608 0.625814 46.993 0.575083 46.6464 0.662754C46.2999 0.750426 46.0028 0.96936 45.8202 1.27165L36.1488 17.3631C36.0992 17.4465 36.0592 17.5351 36.0294 17.6272C34.9473 18.0212 33.9373 18.5848 33.0386 19.2959C30.1082 14.4064 24.7389 11.3276 18.8731 11.3276C9.82201 11.3276 2.45955 18.5483 2.43432 27.4317H0.300781L0.49155 28.924C1.6017 37.597 7.04786 45.1725 14.8786 49.1615V54.2826H35.0842C37.6454 54.2826 39.7291 52.2343 39.7291 49.7182V49.1621C47.5623 45.1713 53.006 37.5958 54.1186 28.924L54.3094 27.4305H50.4565C50.4386 22.8963 47.478 19.0415 43.3599 17.5861L55.4263 6.18176C55.9629 5.67467 55.9802 4.83456 55.462 4.30753C55.3392 4.18205 55.1925 4.08156 55.0302 4.01179C54.8678 3.94203 54.6931 3.90436 54.5159 3.90094C54.3388 3.89751 54.1627 3.9284 53.9977 3.99184C53.8327 4.05528 53.682 4.15002 53.5543 4.27066L40.1131 16.9763C39.9925 16.9714 39.8725 16.9581 39.75 16.9581C39.6725 16.9581 39.598 16.969 39.5217 16.9702L48.1457 2.62005C48.2359 2.47009 48.2951 2.30415 48.3199 2.13171C48.3448 1.95927 48.3348 1.78371 48.2906 1.61505C48.2464 1.4464 48.1687 1.28795 48.0621 1.14876C47.9556 1.00957 47.8221 0.892371 47.6694 0.803845ZM18.8725 13.9803C24.0399 13.9803 28.75 16.8373 31.0928 21.3134C30.2387 22.4671 29.6331 23.7798 29.3131 25.1713C28.2392 20.4763 23.9697 16.9569 18.8725 16.9569C12.9851 16.9569 8.19555 21.6519 8.17032 27.4311H5.13524C5.15986 20.0109 11.3112 13.9803 18.8725 13.9803ZM18.8725 22.5935C16.1463 22.5935 13.9279 24.7603 13.9026 27.4311H10.8719C10.8971 23.1145 14.4743 19.6102 18.8725 19.6102C23.2719 19.6102 26.8528 23.1145 26.8755 27.4311H23.8411C23.8171 24.7603 21.5986 22.5935 18.8725 22.5935ZM21.1383 27.4317H16.6066C16.6187 26.8487 16.8627 26.2935 17.2865 25.885C17.7102 25.4765 18.28 25.2472 18.8737 25.2462C19.4672 25.2474 20.0366 25.4768 20.4599 25.8853C20.8832 26.2938 21.1267 26.8489 21.1383 27.4317ZM51.1974 30.0844C49.6965 37.7929 44.374 44.3645 36.9974 47.5121H32.6743V50.1654H36.9685C36.8674 50.5817 36.6266 50.9525 36.2849 51.2182C35.9433 51.4838 35.5205 51.6288 35.0848 51.6299H17.5802V50.1654H22.6442V47.5121H17.6128C10.2362 44.3663 4.91309 37.7929 3.41094 30.0844H51.1974ZM37.4848 27.4317C37.4967 26.8489 37.7404 26.2939 38.1638 25.8854C38.5872 25.477 39.1565 25.2475 39.75 25.2462C40.344 25.2467 40.9142 25.4758 41.3382 25.8844C41.7623 26.2929 42.0064 26.8484 42.0183 27.4317H37.4848ZM39.75 19.6108C44.1512 19.6108 47.7334 23.1151 47.7568 27.4317H44.7205C44.6959 24.7609 42.4768 22.5941 39.75 22.5941C37.0239 22.5941 34.8072 24.7609 34.7826 27.4317H31.7494C31.774 23.1151 35.3512 19.6108 39.75 19.6108Z"
        fill="white"
      />
      <path
        d="M39.1741 42.9139C39.3901 42.9139 39.6086 42.8637 39.8098 42.7568C41.4591 41.8897 42.9065 40.6947 44.0598 39.248C45.2131 37.8012 46.0469 36.1345 46.5082 34.3539C46.5524 34.1848 46.5622 34.0088 46.537 33.8361C46.5118 33.6633 46.4522 33.4971 46.3614 33.347C46.2707 33.1969 46.1507 33.0659 46.0083 32.9615C45.8659 32.8571 45.7039 32.7813 45.5316 32.7385C45.3593 32.6957 45.1801 32.6867 45.0043 32.7121C44.8285 32.7374 44.6595 32.7967 44.507 32.8863C44.3545 32.976 44.2215 33.0943 44.1157 33.2346C44.0099 33.3748 43.9334 33.5342 43.8904 33.7035C43.5221 35.1266 42.856 36.4588 41.9345 37.6151C41.0131 38.7714 39.8565 39.7265 38.5384 40.4196C38.2726 40.5585 38.0618 40.7808 37.9395 41.051C37.8172 41.3213 37.7905 41.6239 37.8636 41.9108C37.9367 42.1976 38.1054 42.4522 38.3429 42.634C38.5804 42.8158 38.873 42.9143 39.1741 42.9139Z"
        fill="white"
      />
      <path
        d="M35.9059 45.0063C36.7903 45.0063 37.5072 44.3022 37.5072 43.4337C37.5072 42.5651 36.7903 41.8611 35.9059 41.8611C35.0216 41.8611 34.3047 42.5651 34.3047 43.4337C34.3047 44.3022 35.0216 45.0063 35.9059 45.0063Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_230_198">
        <rect width="56" height="55" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default function Footer() {
  const navigate = useNavigate();
  const handleHomeButtonClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };
  return (
    <footer>
      <div className="container ">
        <div className="footer_contant ">
          <div className="footer_logo">
            <div className="logofooter" onClick={handleHomeButtonClick}>
              {logofooter}

              <p>Bistro Bliss</p>
            </div>
            <div>
              <p>
                In the new era of technology we look a in the future with
                certainty and pride to for our company and.
              </p>
              <div className="footer_left">
                <div className="footer_left_icone twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="footer_left_icone facebook">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className="footer_left_icone instgram">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="footer_left_icone github">
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
