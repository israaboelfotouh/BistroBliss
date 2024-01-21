// import React from "react";

// import { NavLink, useNavigate } from "react-router-dom";
// import "./Nabnar.css";

// import navlogo from "../../Img/Logologo_navbar.png";

// export default function Navbar() {
//   const navigate = useNavigate();

//   const handleBookButtonClick = () => {
//     navigate("/book");
//   };
//   return (
//     <div className="container">
//       <nav>
//         <div className="logohome">
//           <img src={navlogo} alt="navlogo" />
//         </div>

//         <div>
//           <ul>
//             <li>
//               <NavLink to="/" exact activeClassName="active-link">
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/about" activeClassName="active-link">
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/menu" activeClassName="active-link">
//                 Menu
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/pages" activeClassName="active-link">
//                 Pages
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" activeClassName="active-link">
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <button onClick={handleBookButtonClick}>Book A Table</button>
//         </div>
//       </nav>
//     </div>
//   );
// }

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Nabnar.css";
import navlogo from "../../Img/Logologo_navbar.png";

// Import the Font Awesome icon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleBookButtonClick = () => {
    navigate("/book");
  };

  return (
    <div className="container">
      <nav>
        <div className="logohome">
          <img src={navlogo} alt="navlogo" />
        </div>

        <div>
          <ul className={isMenuOpen ? "open" : ""}>
            <li>
              <NavLink to="/" exact activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" activeClassName="active-link">
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/pages" activeClassName="active-link">
                Pages
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <button onClick={handleBookButtonClick}>Book A Table</button>
        </div>

        {/* Add the Font Awesome icon for the menu */}
        <div className="menu-icon" onClick={() => setMenuOpen(!isMenuOpen)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </nav>
    </div>
  );
}
