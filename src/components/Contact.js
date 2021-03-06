import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = (e) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jdsqiyg",
        "template_tawmsjs",
        form.current,
        "pox8a-PJjKSpbDgy6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("Your message has been sent!");
  };

  return (
    <div>
      <div className="contact-title">
        <h1>CONTACT</h1>
      </div>

      <div>
        <form ref={form} onSubmit={sendEmail} className="ui inverted form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="field">
            <label>Message</label>
            <textarea
              name="message"
              type="text"
              rows="4"
              placeholder="Message"
              required
            />
          </div>
          <button className="ui red button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
