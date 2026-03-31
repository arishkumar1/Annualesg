import React from "react";
import "../../common.css";
import "./card.css";
import first from "../../assets/1.png";
import second from "../../assets/2.png";
import third from "../../assets/3.png";
import four from "../../assets/4.png";
import five from "../../assets/5.png";
import six from "../../assets/6.png";

const SERVICES = [
  {
    img: first,
    alt: "01",
    title: "Sustainability Report Design",
    desc: "Transform complex environmental, social and governance data into compelling visual stories that showcase your commitment to responsible business practices. We map your disclosures to GRI, SASB, and ISSB standards.",
    btn: "Explore",
    imgLeft: true,
  },
  {
    img: second,
    alt: "02",
    title: "ESG Report Design",
    desc: "Create transparency-focused reports that meet investor expectations while engaging diverse stakeholder groups with clear, accessible design. Clear charts, materiality matrices, and data storytelling meet CSRD expectations.",
    imgLeft: false,
  },
  {
    img: third,
    alt: "03",
    title: "Integrated Report Design",
    desc: "Seamlessly blend financial and sustainability data into organized reports that demonstrate your company's holistic value creation approach.",
    imgLeft: true,
  },
  {
    img: four,
    alt: "04",
    title: "CSR Report Design",
    desc: "Showcase social impact with narrative depth. Communicate your social impact initiatives through thoughtful design that builds brand credibility and stakeholder trust. Best practices proven to boost reputation.",
    imgLeft: false,
  },
  {
    img: five,
    alt: "05",
    title: "Annual Report Design",
    desc: "Present your company's yearly performance with clarity and impact. Team Annual ESG helps you design a well-structured and professional Annual Report that makes complex data digestible and engaging for all audiences.",
    btn: "Explore",
    imgLeft: true,
  },
  {
    img: six,
    alt: "06",
    title: "Digital Guides Design",
    desc: "Dynamic knowledge bites, flipbooks and microsites invite readers to download, read, and share. Engagement rates jump when data becomes an experience.",
    imgLeft: false,
  },
];

function Card() {
  return (
    <div className="services-wrapper">
      {/* ── HEADER ── */}
      <section className="full">
        <p>Our Premium Report Design Services</p>
        <p>
          From compliance aligned sustainability reports to highly engaging
          digital flipbooks, we design reports to elevate your brand.
        </p>
      </section>

      {/* ── ALTERNATING GRID ── */}
      <section className="grid">
        {SERVICES.map((s, i) => {
          const imgCell = (
            <section key={`img-${i}`} className="cell cell-img">
              <img src={s.img} alt={s.alt} />
            </section>
          );

          const textCell = (
            <section key={`txt-${i}`} className="cell cell-text">
              <p>{s.title}</p>
              <p>{s.desc}</p>
              {s.btn && <button type="button">{s.btn}</button>}
            </section>
          );

          return (
            <React.Fragment key={i}>
              {s.imgLeft ? imgCell : textCell}
              {s.imgLeft ? textCell : imgCell}
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
}

export default Card;
