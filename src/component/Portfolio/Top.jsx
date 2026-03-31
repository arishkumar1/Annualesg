import React from "react";
import "./Top.css";
import "../../common.css";
import Adaniports from "../../assets/Adani ports.png";
import GPL from "../../assets/GPL.png";
import godrejgreen from "../../assets/godrejgreen.png";
import Sbifunds from "../../assets/Sbifunds.png";
import aparva from "../../assets/aparvaEnergy.png";
import Bharat from "../../assets/Bharat Forge.png";
import Adaniegs from "../../assets/Adani esg.png";
import Nodi from "../../assets/whatIsNodi.png";
import FailureNodi from "../../assets/FailureNodi.png";

function Top() {
  return (
    <div>
      <section className="top">
        <h2>See What World-Class Reports Looks Like</h2>
        <p>
          Browse through our portfolio of award-winning report designs that have
          helped <br /> companies effectively communicate their performance and
          strategy to stakeholders.
        </p>

        <section className="top-btn">
        
          <button className="first-btn"> All</button>
          <button> Sustainability Report</button>
          <button> Esg Report</button>
          <button> Integrated Report</button>
          <button> Annual Report</button>
          <button> Creative Report</button>
        </section>
      </section>
      <section className="top-card">
        <div>
          <img src={Adaniports} alts="Adaniports" />
          <p> Annual Report</p>
          <h3>Adani ports FY22</h3>
          <p> Client: Adani Ports</p>
        </div>

        <div>
          <img src={GPL} alts="GPL" />
          <p> Sustainability Report</p>
          <h3> GPL Sustainability Report 2025 </h3>
          <p> Client:Godrej Properties</p>
        </div>

        <div>
          <img src={godrejgreen} alts="godrejgreen" />
          <p> Integrated Report</p>
          <h3> Godrej Properties Integrated Report</h3>
          <p> Client: Godrej Properties</p>
        </div>

        <div>
          <img src={Sbifunds} alts="sbifunds" />
          <p> Integrated Report</p>
          <h3>SBI Funds Integrated Report</h3>
          <p> Client: SBI Funds</p>
        </div>

        <div>
          <img src={aparva} alts="aparva" />
          <p> Sustainability Report</p>
          <h3> Apraava Energy Sustainability Report </h3>
          <p> Client: Apraava Energy</p>
        </div>

        <div>
          <img src={Bharat} alts="Bharat" />
          <p>Sustainability Report</p>
          <h3> Bharat Forge Sustainability Report</h3>
          <p> Client: Bharat Forge</p>
        </div>

        <div>
          <img src={Adaniegs} alts="Adaniegs" />
          <p>Esg Report</p>
          <h3> Adani Renewable Report</h3>
          <p> Client: Adani Renewable Energy</p>
        </div>

        <div>
          <img src={Nodi} alts=" Nodi" />
          <p> Creative Report</p>
          <h3> What is Nodinite?</h3>
          <p> Client: Nodinite</p>
        </div>

        <div>
          <img src={FailureNodi} alts=" FailureNodi " />
          <p> Creative Report</p>
          <h3> 5 Integration Failures Your Monitoring Tool Won't Catch</h3>
          <p> Client: Nodinite</p>
        </div>
      </section>
    </div>
  );
}

export default Top;
