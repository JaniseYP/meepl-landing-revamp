import { useState, useEffect } from "react";
import "./Hero.css";

const rotatingWords = ["Hiring", "People", "Workplaces", "Business"];

function Hero() {
  const [words, setWords] = useState({ current: 0, previous: null });

  useEffect(() => {
    const timer = setInterval(() => {
      setWords(({ current }) => ({
        current: (current + 1) % rotatingWords.length,
        previous: current,
      }));
    }, 2300);

    return () => clearInterval(timer);
  }, []);

  function getStatus(index) {
    if (index === words.current) {
      return words.previous === null ? "enter first" : "enter";
    }
    if (index === words.previous) {
      return "exit";
    }
    return "";
  }

  return (
    <section className="hero">
      <h1 className="hero-title">
        <span className="hero-line">
          <span>Empower</span>
          <span className="hero-words">
            {rotatingWords.map((word, index) => (
              <span
                key={word}
                className={`hero-word ${getStatus(index)}`}
                aria-hidden={index !== words.current}
              >
                {word}
              </span>
            ))}
          </span>
        </span>

        <span className="hero-line-two">
          with Meepl
          <svg className="scribble" viewBox="0 0 438 35" aria-hidden="true">
            <path
              pathLength="1"
              className="stroke-a"
              d="M6 10 C17 9 49 7 71 6 C93 5 115 5 137 5 C159 5 180 4 203 4 C226 4 250 6 273 6 C296 6 317 6 339 6 C361 6 390 7 405 7 C420 7 427 9 432 9"
            />
            <path
              pathLength="1"
              className="stroke-d"
              d="M243 7 C225 8 195 10 177 13 C150 17 118 23 96 26"
            />
            <path
              pathLength="1"
              className="stroke-m"
              d="M154 18 C165 18 198 17 220 17 C242 17 269 17 286 17 C303 17 316 19 322 20"
            />
            <path
              pathLength="1"
              className="stroke-b"
              d="M108 27 C119 27 152 26 174 26 C196 26 219 24 240 25 C261 26 292 29 302 30"
            />
          </svg>
        </span>
      </h1>

      <p className="hero-subtitle">
        One AI-powered platform that unifies workforce management, workplace
        operations, and business workflows—helping organizations simplify
        operations, enhance experiences, and scale with confidence.
      </p>
    </section>
  );
}

export default Hero;