import React from "react";
import "./Home.css";
import healthy from "../../Img/ImgHealthy.png";
import fastes1 from "../../Img/fastFood1.png";
import fastes2 from "../../Img/FastFood2.png";
import fastes3 from "../../Img/FastFood3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

import { faClock, faBookmark } from "@fortawesome/free-regular-svg-icons";
export default function Home() {
  return (
    <>
      <section className="bg_home">
        <div className="bg_contant">
          <h1>Best food for your taste</h1>
          <p>
            Discover delectable cuisine and unforgettable moments in our
            welcoming, culinary haven.
          </p>
          <button className="btn1">Book A Table</button>
          <button className="btn2">Explore Menu</button>
        </div>
      </section>

      <section className="provide_healthy container">
        <div className="Healthy_right">
          <img src={healthy} alt="healthy" />
          <div className="healthy_contact">
            <h3>Come and visit us</h3>
            <div className="healthy_contact_data">
              <FontAwesomeIcon icon={faPhone} />
              <p>(414) 857 - 0107</p>
            </div>

            <div className="healthy_contact_data">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>happytummy@restaurant.com</p>
            </div>
            <div className="healthy_contact_data">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</p>
            </div>
          </div>
        </div>
        <div className="Healthy_left">
          <div className="health_left_contant">
            <h2>We provide healthy food for your family.</h2>
            <h6>
              Our story began with a vision to create a unique dining experience
              that merges fine dining, exceptional service, and a vibrant
              ambiance. Rooted in city's rich culinary culture, we aim to honor
              our local roots while infusing a global palate.
            </h6>
            <p>
              At place, we believe that dining is not just about food, but also
              about the overall experience. Our staff, renowned for their warmth
              and dedication, strives to make every visit an unforgettable
              event.
            </p>

            <button>More About Us</button>
          </div>
        </div>
      </section>

      <section className="container Fastest">
        <div className="Fastest_right">
          <div>
            <img src={fastes1} alt="fastes1" />
          </div>
          <div className="fasts_img">
            <img src={fastes3} alt="fastes2" />
            <img src={fastes2} alt="fastes3" />
          </div>
        </div>
        <div className="Fastest_left">
          <h2>Fastest Food Delivery in City</h2>
          <p>
            Our visual designer lets you quickly and of drag a down your way to
            customapps for both keep desktop.{" "}
          </p>
          <div>
            <div className="fastest_icone">
              <div className="fast">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <p>Delivery within 30 minutes</p>
            </div>
            <div className="fastest_icone">
              <div className="fast">
                <FontAwesomeIcon icon={faBookmark} />
              </div>
              <p>Best Offer & Prices</p>
            </div>
            <div className="fastest_icone">
              <div className="fast">
                <FontAwesomeIcon icon={faChartBar} />
              </div>
              <p>Online Services Available</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
