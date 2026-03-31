// import React from "react";
// import "./Cards.css";
// import "../../common.css";

// function Cards() {
//   return (
//     <div className="main-card  ">
//       <section className="shadow">
//         <div className="head-card">
//           <section>
//             <h3> Discovery & Planning </h3>
//           </section>
//           <section>01</section>
//         </div>

//         <div className="text-card" >
//           <p>
//             We start by understanding your business, audience, and reporting
//             goals to create a tailored strategy.
//           </p>
//         </div>
//       </section>

//       <section className="color-text"></section>

//       <section className="color-text"></section>

//       <section className="shadow">

//          <div className="right-card">
//           <section>02</section>
//           <section>
//             <h3> Discovery & Planning </h3>
//           </section>

//         </div>

//         <div className="text-card" >
//           <p>
//             We start by understanding your business, audience, and reporting
//             goals to create a tailored strategy.
//           </p>
//         </div>
//       </section>

//       <section  className="shadow">
//          <div className="head-card">
//           <section>
//             <h3> Discovery & Planning </h3>
//           </section>
//           <section>03</section>
//         </div>

//         <div className="text-card" >
//           <p>
//             We start by understanding your business, audience, and reporting
//             goals to create a tailored strategy.
//           </p>
//         </div>
//       </section>

//       <section ></section>

//       <section></section>

//       <section  className="shadow">
//            <div className="right-card">

//           <section>04</section>
//            <section>
//             <h3> Discovery & Planning </h3>
//           </section>
//         </div>

//         <div className="text-card" >
//           <p>
//             We start by understanding your business, audience, and reporting
//             goals to create a tailored strategy.
//           </p>
//         </div>
//       </section>

//       <section  className="shadow">
//         <div className="head-card">
//           <section>
//             <h3> Discovery & Planning </h3>
//           </section>
//           <section>05</section>
//         </div>

//         <div className="text-card" >
//           <p>
//             We start by understanding your business, audience, and reporting
//             goals to create a tailored strategy.
//           </p>
//         </div>
//       </section>

//       <section ></section>
//       <section></section>

//       <section className="shadow">

//         <div className="right-card">
//           <section>06</section>
//           <section>
//             <h3> Discovery & Planning </h3>
//           </section>

//         </div>

//         <div className="text-card" >
//           <p>
//             We start by understanding your business, audience, and reporting
//             goals to create a tailored strategy.
//           </p>
//         </div>
//       </section>

//     </div>

//   );
// }

// export default Cards;

import React from "react";
import "./Cards.css";

const CARDS = [
  {
    id: "01",
    title: "Discovery & Planning",
    text: "We start by understanding your business, audience, and reporting goals to create a tailored strategy.",
  },
  {
    id: "02",
    title: "Data Collection",
    text: "We gather ESG metrics across your operations, supply chain, and stakeholders with precision and care.",
  },
  {
    id: "03",
    title: "Analysis & Insights",
    text: "Our team analyses the data to surface meaningful trends, risks, and opportunities for your organisation.",
  },
  {
    id: "04",
    title: "Report Design",
    text: "We craft a visually compelling, compliant ESG report that communicates your impact with clarity.",
  },
  {
    id: "05",
    title: "Review & Refinement",
    text: "Collaborative review cycles ensure the report reflects your voice and meets all regulatory standards.",
  },
  {
    id: "06",
    title: "Publishing & Support",
    text: "We handle final publishing and provide ongoing support so your report reaches the right audiences.",
  },
];

/**
 * Zig-zag layout (desktop):
 *   Col 1          Col 2
 *   [Card 01]      [spacer]
 *   [spacer]       [Card 02]
 *   [Card 03]      [spacer]
 *   [spacer]       [Card 04]
 *   [Card 05]      [spacer]
 *   [spacer]       [Card 06]
 *
 * On mobile: single column, spacers hidden via CSS.
 */
function Cards() {
  const rows = [];

  CARDS.forEach((card, i) => {
    const isLeft = i % 2 === 0; // cards 1,3,5 go left; 2,4,6 go right

    if (isLeft) {
      // Card in col 1, spacer in col 2
      rows.push(
        <div key={card.id} className="card">
          <div className="card-header">
            <h3>{card.title}</h3>
            <span className="card-num">{card.id}</span>
          </div>
          <div className="card-body">
            <p>{card.text}</p>
          </div>
        </div>
      );
      rows.push(<div key={`sp-${card.id}`} className="spacer" />);
    } else {
      // Spacer in col 1, card in col 2
      rows.push(<div key={`sp-${card.id}`} className="spacer" />);
      rows.push(
        <div key={card.id} className="card">
          <div className="card-header reverse">
            <h3>{card.title}</h3>
            <span className="card-num">{card.id}</span>
          </div>
          <div className="card-body">
            <p>{card.text}</p>
          </div>
        </div>
      );
    }
  });

  return <div className="main-card">{rows}</div>;
}

export default Cards;
