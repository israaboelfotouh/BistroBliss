import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <>
      <section className=" contact">
        <div className="contact_content">
          <h1>Contact Us</h1>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
        </div>
      </section>

      <section className="formcontact">
        <form className="form_contact">
          <div className="form_grid_contact">
            <div className="form2">
              <label>Name</label>
              <input
                type="text"
                pattern="[A-Za-z]+"
                required
                placeholder="Enter Name"
              />
            </div>
            <div className="form2">
              <label>Email</label>
              <input type="email" required placeholder="Enter email" />
            </div>

            <div className="form2 itemform2">
              <label>Subject</label>
              <input />
            </div>
            <div className="form2 itemform2">
              <label>Message</label>
              <textarea />
            </div>
            <div className="form2 itemform">
              <button>Book A Table</button>
            </div>
          </div>
        </form>

        <div className="contact_details  ">
          <div>
            <h6>Call Us:</h6>
            <h3>+1-234-567-8900</h3>
          </div>
          <div>
            <h6>Hours:</h6>
            <p>Mon-Fri: 11am - 8pm </p>
            <p>Sat, Sun: 9am - 10pm </p>
          </div>
          <div>
            <h6>Call Us:</h6>
            <p>123 Bridge Street Nowhere Land, LA 12345 United States</p>
          </div>
        </div>
      </section>
    </>
  );
}
