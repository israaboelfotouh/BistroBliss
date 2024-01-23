import React from "react";
import "./book.css";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export default function Book() {
  //   const location = { lat: 26.3969, lng: 50.1126 };
  //   const defaultCenter = location || { lat: 0, lng: 0 };
  return (
    <>
      <section className=" book">
        <div className="book_content">
          <h1>Book A Table</h1>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
      </section>

      <section className="formbook">
        <form className="form1">
          <div className="form_grid">
            <div className="form">
              <label>Date</label>
              <input type="date" required />
            </div>
            <div className="form">
              <label>Time</label>
              <input type="time" placeholder="HH:MM" required />
            </div>
            <div className="form">
              <label>Name</label>
              <input
                type="text"
                pattern="[A-Za-z]+"
                required
                placeholder="Enter Name"
              />
            </div>
            <div className="form">
              <label>Phone</label>
              <input
                type="tel"
                placeholder="Enter phone"
                pattern="[0-9]{10}"
                required
              />
            </div>
            <div className="form itemform">
              <label>Total Person</label>
              <select>
                <option value="1">1 person</option>
                <option value="2">2 people</option>
                <option value="3">3 people</option>
                <option value="4">4 people</option>
                <option value="5">5 people</option>
                <option value="more">More</option>
              </select>
            </div>
            <div className="form itemform">
              <button>Book A Table</button>
            </div>
          </div>
        </form>
        <div className="map_gogle">
          <iframe
            title="موقع المطعم"
            width="100%"
            height="715"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754755.4428696733!2d32.120506850296!3d30.795434135806282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c5bece61c277%3A0x980f50731f92b65e!2sGlow%20up%20Healthy%20Food!5e0!3m2!1sar!2seg!4v1705796747283!5m2!1sar!2seg"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
