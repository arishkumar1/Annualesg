// import React from "react";
// import "./Cards.css";
// import "../../common.css";

// const testimonials = [
//   {
//     text: "The annual report designed by Annual ESG received overwhelmingly positive feedback from our shareholders. Their ability to translate our brand identity into the report design was impressive.",
//     name: "Jennifer Lee",
//     role: "Marketing Director, Global Retail",
//   },
//   {
//     text: "Annual ESG's attention to detail and commitment to excellence made our annual report stand out. They were responsive, professional, and delivered beyond our expectations.",
//     name: "David Patel",
//     role: "Finance Manager, Tech Solutions",
//   },
//   {
//     text: "Annual ESG transformed our annual report from a dry financial document into a compelling narrative that our stakeholders love. The design quality exceeded our expectations.",
//     name: "Sarah Johnson",
//     role: "CFO, Global Finance Corp",
//   },
//   {
//     text: "Working with Annual ESG was a seamless experience. Their team understood our vision from day one and brought it to life with creativity and precision.",
//     name: "Rachel Kim",
//     role: "Communications Lead, Summit Group",
//   },
//   {
//     text: "Our stakeholders were blown away by the quality of the final report. Annual ESG brings a level of professionalism that truly sets them apart in the industry.",
//     name: "Mark Thompson",
//     role: "CEO, Vertex Holdings",
//   },
//   {
//     text: "From concept to delivery, Annual ESG exceeded our expectations at every step. The report was visually stunning and strategically aligned with our brand identity.",
//     name: "Priya Nair",
//     role: "Brand Director, EcoVentures",
//   },
// ];



// function getInitials(name) {
//   return name
//     .split(" ")
//     .map((n) => n[0])
//     .join("")
//     .toUpperCase();
// }



// class Stars extends React.Component {
//   render() {
//     return (
//       <div className="ts-stars">
//         {[1, 2, 3, 4, 5].map((i) => (
//           <div key={i} className="ts-star" />
//         ))}
//       </div>
//     );
//   }
// }



// class TestimonialCard extends React.Component {
//   render() {
//     const { text, name, role } = this.props;
//     return (
//       <div className="ts-card">
//         <Stars />
//         <div className="ts-quote-mark">"</div>
//         <p className="ts-card-text">{text}</p>
//         <div className="ts-divider" />
//         <div className="ts-reviewer">
//           <div className="ts-avatar">{getInitials(name)}</div>
//           <div>
//             <div className="ts-reviewer-name">{name}</div>
//             <div className="ts-reviewer-role">{role}</div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }



// class ArrowButton extends React.Component {
//   render() {
//     const { direction, onClick } = this.props;
//     const points = direction === "prev" ? "15 18 9 12 15 6" : "9 6 15 12 9 18";
//     return (
//       <button className="ts-arrow-btn" onClick={onClick} aria-label={direction}>
//         <svg viewBox="0 0 24 24">
//           <polyline points={points} />
//         </svg>
//       </button>
//     );
//   }
// }



// class Dot extends React.Component {
//   render() {
//     const { active, onClick } = this.props;
//     return (
//       <button
//         className={active ? "ts-dot active" : "ts-dot"}
//         onClick={onClick}
//         aria-label="Go to slide"
//       />
//     );
//   }
// }


// class TestimonialSlider extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { current: 0 };
//     this.visibleCards = 3;
//     this.maxIndex = testimonials.length - this.visibleCards;
//     this.autoTimer = null;
//     this.trackRef = React.createRef();
//   }

//   componentDidMount() {
//     this.startAuto();
//   }

//   componentWillUnmount() {
//     clearInterval(this.autoTimer);
//   }

//   startAuto() {
//     this.autoTimer = setInterval(() => {
//       const next =
//         this.state.current < this.maxIndex ? this.state.current + 1 : 0;
//       this.goTo(next);
//     }, 3500);
//   }

//   goTo(index) {
//     const clamped = Math.max(0, Math.min(index, this.maxIndex));
//     this.setState({ current: clamped }, () => {
//       if (this.trackRef.current && this.trackRef.current.children[0]) {
//         const cardW = this.trackRef.current.children[0].offsetWidth + 20;
//         this.trackRef.current.style.transform = `translateX(-${
//           clamped * cardW
//         }px)`;
//       }
//     });
//   }

//   handlePrev() {
//     clearInterval(this.autoTimer);
//     this.goTo(this.state.current - 1);
//     this.startAuto();
//   }

//   handleNext() {
//     clearInterval(this.autoTimer);
//     this.goTo(this.state.current + 1);
//     this.startAuto();
//   }

//   handleDot(index) {
//     clearInterval(this.autoTimer);
//     this.goTo(index);
//     this.startAuto();
//   }

//   render() {
//     const { current } = this.state;
//     const dots = Array.from({ length: this.maxIndex + 1 }, (_, i) => i);

//     return (
//       <section className="ts-section">
      
//         <div className="ts-slider-wrapper">
//           <div className="ts-slider-track" ref={this.trackRef}>
//             {testimonials.map((t, i) => (
//               <TestimonialCard
//                 key={i}
//                 text={t.text}
//                 name={t.name}
//                 role={t.role}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Controls */}
//         <div className="ts-controls">
//           <div className="ts-arrows">
//             <ArrowButton direction="prev" onClick={() => this.handlePrev()} />
//             <ArrowButton direction="next" onClick={() => this.handleNext()} />
//           </div>
//           <div className="ts-dots">
//             {dots.map((i) => (
//               <Dot
//                 key={i}
//                 active={current === i}
//                 onClick={() => this.handleDot(i)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// function Cards() {
//   return <TestimonialSlider />;
// }

// export default Cards;



import React from "react";
import "./Cards.css";

const testimonials = [
  {
    text: "The annual report designed by Annual ESG received overwhelmingly positive feedback from our shareholders. Their ability to translate our brand identity into the report design was impressive.",
    name: "Jennifer Lee",
    role: "Marketing Director, Global Retail",
  },
  {
    text: "Annual ESG's attention to detail and commitment to excellence made our annual report stand out. They were responsive, professional, and delivered beyond our expectations.",
    name: "David Patel",
    role: "Finance Manager, Tech Solutions",
  },
  {
    text: "Annual ESG transformed our annual report from a dry financial document into a compelling narrative that our stakeholders love. The design quality exceeded our expectations.",
    name: "Sarah Johnson",
    role: "CFO, Global Finance Corp",
  },
  {
    text: "Working with Annual ESG was a seamless experience. Their team understood our vision from day one and brought it to life with creativity and precision.",
    name: "Rachel Kim",
    role: "Communications Lead, Summit Group",
  },
  {
    text: "Our stakeholders were blown away by the quality of the final report. Annual ESG brings a level of professionalism that truly sets them apart in the industry.",
    name: "Mark Thompson",
    role: "CEO, Vertex Holdings",
  },
  {
    text: "From concept to delivery, Annual ESG exceeded our expectations at every step. The report was visually stunning and strategically aligned with our brand identity.",
    name: "Priya Nair",
    role: "Brand Director, EcoVentures",
  },
];

function getInitials(name) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase();
}

/* Returns how many cards are visible based on window width */
function getVisibleCount() {
  if (typeof window === "undefined") return 3;
  if (window.innerWidth <= 600) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
}

function Stars() {
  return (
    <div className="ts-stars">
      {[1, 2, 3, 4, 5].map((i) => <div key={i} className="ts-star" />)}
    </div>
  );
}

function TestimonialCard({ text, name, role }) {
  return (
    <div className="ts-card">
      <Stars />
      <div className="ts-quote-mark">"</div>
      <p className="ts-card-text">{text}</p>
      <div className="ts-divider" />
      <div className="ts-reviewer">
        <div className="ts-avatar">{getInitials(name)}</div>
        <div>
          <div className="ts-reviewer-name">{name}</div>
          <div className="ts-reviewer-role">{role}</div>
        </div>
      </div>
    </div>
  );
}

function ArrowButton({ direction, onClick }) {
  const points = direction === "prev" ? "15 18 9 12 15 6" : "9 6 15 12 9 18";
  return (
    <button className="ts-arrow-btn" onClick={onClick} aria-label={direction}>
      <svg viewBox="0 0 24 24">
        <polyline points={points} />
      </svg>
    </button>
  );
}

function Dot({ active, onClick }) {
  return (
    <button
      className={active ? "ts-dot active" : "ts-dot"}
      onClick={onClick}
      aria-label="Go to slide"
    />
  );
}

class TestimonialSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: 0, visibleCount: getVisibleCount() };
    this.autoTimer = null;
    this.trackRef = React.createRef();
    this.handleResize = this.handleResize.bind(this);
  }

  getMaxIndex(visibleCount) {
    return Math.max(0, testimonials.length - visibleCount);
  }

  componentDidMount() {
    this.startAuto();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    clearInterval(this.autoTimer);
    window.removeEventListener("resize", this.handleResize);
  }

  /* Recalculate on resize and snap back to a valid index */
  handleResize() {
    const visibleCount = getVisibleCount();
    const maxIndex = this.getMaxIndex(visibleCount);
    const current = Math.min(this.state.current, maxIndex);
    this.setState({ visibleCount, current }, () => this.applyTransform(current));
  }

  startAuto() {
    clearInterval(this.autoTimer);
    this.autoTimer = setInterval(() => {
      const maxIndex = this.getMaxIndex(this.state.visibleCount);
      const next = this.state.current < maxIndex ? this.state.current + 1 : 0;
      this.goTo(next);
    }, 3500);
  }

  applyTransform(index) {
    if (this.trackRef.current && this.trackRef.current.children[0]) {
      const gap = 20;
      const cardW = this.trackRef.current.children[0].offsetWidth + gap;
      this.trackRef.current.style.transform = `translateX(-${index * cardW}px)`;
    }
  }

  goTo(index) {
    const maxIndex = this.getMaxIndex(this.state.visibleCount);
    const clamped = Math.max(0, Math.min(index, maxIndex));
    this.setState({ current: clamped }, () => this.applyTransform(clamped));
  }

  handlePrev() {
    clearInterval(this.autoTimer);
    this.goTo(this.state.current - 1);
    this.startAuto();
  }

  handleNext() {
    clearInterval(this.autoTimer);
    this.goTo(this.state.current + 1);
    this.startAuto();
  }

  handleDot(index) {
    clearInterval(this.autoTimer);
    this.goTo(index);
    this.startAuto();
  }

  render() {
    const { current, visibleCount } = this.state;
    const maxIndex = this.getMaxIndex(visibleCount);
    const dots = Array.from({ length: maxIndex + 1 }, (_, i) => i);

    return (
      <section className="ts-section">
        <div className="ts-slider-wrapper">
          <div className="ts-slider-track" ref={this.trackRef}>
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} text={t.text} name={t.name} role={t.role} />
            ))}
          </div>
        </div>

        <div className="ts-controls">
          <div className="ts-arrows">
            <ArrowButton direction="prev" onClick={() => this.handlePrev()} />
            <ArrowButton direction="next" onClick={() => this.handleNext()} />
          </div>
          <div className="ts-dots">
            {dots.map((i) => (
              <Dot key={i} active={current === i} onClick={() => this.handleDot(i)} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

function Cards() {
  return <TestimonialSlider />;
}

export default Cards;
