import React from "react";
import "./Home.css";
import customer1 from "../../Img/customer1.png";
import customer2 from "../../Img/customer2.png";
import customer3 from "../../Img/customer3.png";
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
  const customer = [
    {
      title: " “The best restaurant” ",
      description:
        "Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.",
      img: customer1,
      username: "Sophire Robson",
      job: "Los Angeles, CA",
    },
    {
      title: " “Simply delicious” ",
      description:
        "Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.",
      img: customer2,
      username: "Matt Cannon",
      job: "San Diego, CA",
    },
    {
      title: " “One of a kind restaurant” ",
      description:
        "The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.",
      img: customer3,
      username: "Andy Smith",
      job: "San Francisco, CA",
    },
  ];
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

      <section className="container customer">
        <div>
          <h1>What Our Customers Say</h1>
        </div>

        <div className="Cusmap">
          {customer.map((item, index) => (
            <div key={index} className="customer_item">
              <div>
                <div>
                  <p className="customertitle">{item.title}</p>
                  <p className="customerdis">{item.description}</p>
                  <div className="line"></div>
                </div>
                <div className="mabCustomer">
                  <img src={item.img} alt="img1" />
                  <div>
                    <p className="customername">{item.username}</p>
                    <p className="customerjob">{item.job}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
