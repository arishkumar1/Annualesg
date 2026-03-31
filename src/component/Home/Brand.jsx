import React from "react";
import "./Brand.css";
import "../../common.css"
import adaniports from "../../assets/adaniPorts.jpg";
import adaniRenewable from "../../assets/adaniRenewable.jpg";
import Apraava from "../../assets/Apraava.jpg";
import bharatForge from "../../assets/bharatForge.jpg";
import godrej from "../../assets/godrej.jpg";
import reliance from "../../assets/reliance.jpg";
import SBI from "../../assets/SBI.jpg";

function Brand() {
  return (
    <div className="brand">
      <section className="brand-text">
        <p>Global brand we design ESG reports for</p>
        <p>
          Trusted by Fortune 500 companies worldwide to elevate their corporate
          communications
        </p>
      </section>

      <section className="brand-img">
        <img src={godrej} alt="godrej" />
        <img src={adaniports} alt="adaniports" />
        <img src={bharatForge} alt="bharatForge" />
        <img src={Apraava} alt="Apraava" />
        <img src={SBI} alt="SBI" />
        <img src={adaniRenewable} alt="adaniRenewable" />
        <img src={reliance} alt="reliance" />
      </section>

      <section className="brand-bottom">
        <p>
          We design reports for leading corporates, consultancies, and
          nonprofits around the world. Our <br/>clients choose us because we combine
          creative design with ESG expertise to deliver reports that<br/> inspire
          stakeholders.
        </p>
      </section>
    </div>
  );
}

export default Brand;
