import React from "react";
import "./Form.css";
import "../../common.css"


function Contact() {
  return (
    <div className="main">
      <section  className='uper'>
        <p>Contact us</p>
        <p>
          Let's discuss how we can help transform your corporate reporting and <br/>
          create impactful designs that resonate with your stakeholders.
        </p>
      </section>
      <section className="container">
        <section className ='top-form'>
        <div className="main-form">
          <div className="row">
            <div className="form-group">
              <label>
                Name <span className="req">*</span>
              </label>
              <input name="name" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>
                Email <span className="req">*</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="your.email@company.com"
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group">
              <label>Phone Number</label>
              <div className="phone-row">
                <select name="countryCode">
                  <option>+91 IN</option>
                  <option>+1 US</option>
                  <option>+44 UK</option>
                </select>
                <input name="phone" type="tel" placeholder="98765 43210" />
              </div>
            </div>
            <div className="form-group">
              <label>Company</label>
              <input name="company" placeholder="Your company name" />
            </div>
          </div>

          <div className="form-group">
            <label>Report Type</label>
            <select name="reportType">
              <option value="" disabled>
                Select a report type
              </option>
              <option>ESG Report</option>
              <option>Sustainability Report</option>
              <option>Annual Report</option>
              <option>Impact Report</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>
              Message <span className="req">*</span>
            </label>
            <textarea
              name="message"
              placeholder="Tell us about your project and requirements..."
            />
          </div>

          <button className="submit-btn">Send Message</button>
        </div>
       </section>


        <section  className="address">
          <div  className="main-address">
          <h2> Contact Information</h2>
          <h3>our address</h3>
          <p>203, BSI Business Park, H-160, H  <br/>Block, Sector 63, Noida, Uttar <br/> Pradesh 201301, India.</p>
          <h3>call us</h3>
          <h2>  +91 94119 53348 (India)</h2>
          <h3>Email </h3>
          <h2>Uscontact@annualesg.com</h2>
          <h3>Business Hours</h3>
           <p> Monday - Saturday, 9:00 AM - 6:00 PM</p>
           </div>
        </section>
      </section>
      
       
    </div>
  );
}

export default Contact;
