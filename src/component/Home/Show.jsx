import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Show.css";
import "../../common.css";
import Adani from "../../assets/Adani ports.png";
import GPL from "../../assets/GPL.png";
import Apraava from "../../assets/aparvaEnergy.png";
import godrej from "../../assets/godrejgreen.png";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const IMAGES = [Adani, GPL, Apraava, godrej];

const LEFT_IMG = godrej;
const RIGHT_IMG = Adani;

const FADE_DURATION = 900; // ms — long smooth crossfade

function Show() {
  const [layers, setLayers] = useState([
    { id: 0, src: IMAGES[0], phase: "visible" }, // phase: visible | entering | leaving
  ]);
  const currentIndexRef = useRef(0);
  const isTransitioning = useRef(false);
  const intervalRef = useRef(null);

  const advance = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;

    const nextIndex = (currentIndexRef.current + 1) % IMAGES.length;
    currentIndexRef.current = nextIndex;

    // Mount new image with phase "entering" (opacity 0, slight scale down)
    setLayers((prev) => [
      ...prev.map((l) => ({ ...l, phase: "leaving" })),
      { id: Date.now(), src: IMAGES[nextIndex], phase: "entering" },
    ]);

    // One frame later — trigger enter animation
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setLayers((prev) =>
          prev.map((l) =>
            l.phase === "entering" ? { ...l, phase: "visible" } : l
          )
        );
      });
    });

    // After transition done — remove old leaving layer
    setTimeout(() => {
      setLayers((prev) => prev.filter((l) => l.phase !== "leaving"));
      isTransitioning.current = false;
    }, FADE_DURATION + 50);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(advance, 3000);
    return () => clearInterval(intervalRef.current);
  }, [advance]);

  function handleDot(i) {
    if (isTransitioning.current || i === currentIndexRef.current) return;
    clearInterval(intervalRef.current);
    currentIndexRef.current = i;
    isTransitioning.current = true;

    setLayers((prev) => [
      ...prev.map((l) => ({ ...l, phase: "leaving" })),
      { id: Date.now(), src: IMAGES[i], phase: "entering" },
    ]);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setLayers((prev) =>
          prev.map((l) =>
            l.phase === "entering" ? { ...l, phase: "visible" } : l
          )
        );
      });
    });

    setTimeout(() => {
      setLayers((prev) => prev.filter((l) => l.phase !== "leaving"));
      isTransitioning.current = false;
      intervalRef.current = setInterval(advance, 3000);
    }, FADE_DURATION + 50);
  }

  const activeIndex = currentIndexRef.current;

  return (
    <div className="main-show">
      {/* ── LEFT TEXT ── */}
      <section className="text-show">
        <p>
          Sustainability &<br /> Annual Report Design <br /> Agency
        </p>
        <p>
          Your sustainability reports are more than compliance
          <br /> documents. Annual ESG turns complex data into beautifully{" "}
          <br />
          designed Sustainability and Annual reports that engage <br />
          stakeholders without compromising on your Brand Assets.
          <br /> We change your corporate reports into a Stakeholder Magnet{" "}
          <br /> Without Compromising Your Brand.
        </p>

        {/* <Link to="/contact"></Link> */}
          <button className="btn">Start your report</button>
       

        {/* <Link to="/portfolio"></Link> */}
          <button>View your work</button>
        
      </section>

      {/* ── CARD SHOW ── */}
      <section className="card-show">
        <div className="rm-stage">
          {/* LEFT — fully static */}
          <div className="rm-card rm-card-left rm-card-static">
            <div className="rm-card-inner">
              <img src={LEFT_IMG} alt="report" className="rm-card-img" />
            </div>
          </div>

          {/* CENTER — layered crossfade */}
          <div className="rm-card rm-card-main">
            <div className="rm-card-inner rm-cf-wrap">
              {layers.map((layer) => (
                <img
                  key={layer.id}
                  src={layer.src}
                  alt="report"
                  className={`rm-card-img rm-cf-layer rm-cf-${layer.phase}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — fully static */}
          <div className="rm-card rm-card-right rm-card-static">
            <div className="rm-card-inner">
              <img src={RIGHT_IMG} alt="report" className="rm-card-img" />
            </div>
          </div>
        </div>

        {/* DOTS */}
        <div className="rm-dots">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              className={`rm-dot${i === activeIndex ? " rm-dot-active" : ""}`}
              onClick={() => handleDot(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Show;
