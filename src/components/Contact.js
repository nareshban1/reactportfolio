import emailjs from 'emailjs-com';

const Contact= () => {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target,process.env.REACT_APP_USER_ID)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return(
        <div className="contacts" id="contact">
            <p className="contact" >Let's Talk</p>
            <div className="conrow">
                <div className="concolumn">
                    <p className="contacttitle">
                        You can contact me on the following details.
                    </p>
                </div>
                <div className="concolumn">
                    <p className="contacttitle">
                        Send me a message
                    </p>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" required/>
                        <label>Email</label>
                        <input type="email" name="user_email" required/>
                        <label>Message</label>
                        <textarea name="message" required/>
                        <input type="submit" value="Send" className="sendbtn"/>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contact