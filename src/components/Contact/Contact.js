import emailjs from "emailjs-com";
import { useState } from "react";
import "./Contact.css"

const Contact = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        e.target,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
        setEmail(""),
        setUsername(""),
        setMessage("")
      );
  }

  return (
    <div className="contactspage" id="contacts">
      <div className="contacts container">
        <p className="projtitle">Let's Talk</p>
        <div className="conrow">
          <div className="concolumn">
            <p className="contacttitle">
              You can contact me on the following details.
            </p>
            <p className="contactd">
              Email:  
              <span className="contactdata">  nareshban40@gmail.com</span>
            </p>
            <p className="contactd">
              Address:  
              <span className="contactdata">  Samakhusi, Kathmandu </span>
            </p>
          </div>
          <div className="concolumn">
            <p className="contactsend">Send me a message.</p>
            <form className="contact-form" onSubmit={sendEmail}>
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                id="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                id="useremail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Message</label>
              <textarea
                name="message"
                id="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <input type="submit" value="Send" className="sendbtn" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
