import React from "react";
import "../Home/Home.css";
import "./About.css";
import imghome from "../../Img/Imghome.png";
import little from "../../Img//little.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";
import customer1 from "../../Img/customer1.png";
import customer2 from "../../Img/customer2.png";
import customer3 from "../../Img/customer3.png";
export default function About() {
  const data = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M38 46L6 43V5L38 2V46Z"
            stroke="#474747"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M44 6V42"
            stroke="#474747"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 29H29"
            stroke="#AD343E"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 36L29 37"
            stroke="#AD343E"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 22C24.3137 22 27 19.3137 27 16C27 12.6863 24.3137 10 21 10C17.6863 10 15 12.6863 15 16C15 19.3137 17.6863 22 21 22Z"
            stroke="#AD343E"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: " Multi Cuisine",
      description:
        "In the new era of technology we look in the future with certainty life.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M38 22H10V38H38V22Z"
            stroke="#AD343E"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M31 28H17"
            stroke="#AD343E"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M29 12C30.1046 12 31 11.1046 31 10C31 8.89543 30.1046 8 29 8C27.8954 8 27 8.89543 27 10C27 11.1046 27.8954 12 29 12Z"
            fill="#474747"
          />
          <path
            d="M37 12C38.1046 12 39 11.1046 39 10C39 8.89543 38.1046 8 37 8C35.8954 8 35 8.89543 35 10C35 11.1046 35.8954 12 37 12Z"
            fill="#474747"
          />
          <path
            d="M40 4H8C5.79086 4 4 5.79086 4 8V40C4 42.2091 5.79086 44 8 44H40C42.2091 44 44 42.2091 44 40V8C44 5.79086 42.2091 4 40 4Z"
            stroke="#474747"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 10H16"
            stroke="#474747"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4 16H44"
            stroke="#474747"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Easy To Order",
      description:
        "In the new era of technology we look in the future with certainty life.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
        >
          <path
            d="M42 28V46H6V28"
            stroke="#474747"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17 2H31"
            stroke="#474747"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24 28L32.5 19.5"
            stroke="#AD343E"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24 2V5"
            stroke="#474747"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24 46C33.9411 46 42 37.9411 42 28C42 18.0589 33.9411 10 24 10C14.0589 10 6 18.0589 6 28C6 37.9411 14.0589 46 24 46Z"
            stroke="#474747"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24 16V18"
            stroke="#474747"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M36 28H34"
            stroke="#474747"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M32.485 36.485L31.071 35.071"
            stroke="#474747"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M24 40V38"
            stroke="#474747"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.5149 36.485L16.9289 35.071"
            stroke="#474747"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 28H14"
            stroke="#474747"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.5149 19.515L16.9289 20.929"
            stroke="#474747"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Fast Delivery ",
      description:
        "In the new era of technology we look in the future with certainty life",
    },
  ];

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
      <section className="provide_healthy container">
        <div className="Healthy_right">
          <img src={imghome} alt="imghome" />
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
              <FontAwesomeIcon icon={faChartBar} />
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
          </div>
        </div>
      </section>
      <section className="AboutBg">
        <div className="About_content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 106 106"
            fill="none"
          >
            <circle cx="53" cy="53" r="53" fill="white" />
            <path
              d="M49.8569 63.8798C48.5248 64.7124 46.7969 63.7547 46.7969 62.1838V45.336C46.7969 43.7652 48.5248 42.8075 49.8569 43.64L63.3351 52.0639C64.5884 52.8473 64.5884 54.6726 63.3351 55.4559L49.8569 63.8798Z"
              fill="#AD343E"
            />
          </svg>
          <h2>Feel the authentic & original taste from us</h2>
        </div>
      </section>

      <div className="map container">
        {data.map((item, index) => (
          <div key={index} className="map-item">
            <div className="data_icon">{item.icon}</div>
            <div className="data_data">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="container little">
        <div className="little_content">
          <h1>A little information for our valuable guest</h1>
          <p>
            At place, we believe that dining is not just about food, but also
            about the overall experience. Our staff, renowned for their warmth
            and dedication, strives to make every visit an unforgettable event.
          </p>

          <div className="little_grid">
            <div className="little_item">
              <h2>3</h2>
              <p>Locations</p>
            </div>
            <div className="little_item">
              <h2>1995</h2>
              <p>Founded</p>
            </div>
            <div className="little_item">
              <h2>65+</h2>
              <p>Staff Members</p>
            </div>
            <div className="little_item">
              <h2>100%</h2>
              <p>Satisfied Customers</p>
            </div>
          </div>
        </div>

        <img src={little} alt="little" />
      </section>

      <section className="container customer">
        <div>
          <h1>What Our Customers Say</h1>
        </div>

        <div className="Cusmap">
          {customer.map((item, index) => (
            <div key={index} className="customer_item">
              <div>
                <div className="customers">
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
