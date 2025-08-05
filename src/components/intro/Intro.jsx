import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro({ menuOpen }) {
  const textRef = useRef();

  useEffect(() => {
    if (textRef.current) {
      textRef.current.textContent = "";

      const timer = setTimeout(() => {
        init(textRef.current, {
          showCursor: true,
          backDelay: 1900,
          backSpeed: 60,
          strings: [
            "Software Developer",
            "Full-Stack Warrior",
            "Code Architect",
          ],
        });
      }, 50);

      return () => {
        clearTimeout(timer);
        if (textRef.current) textRef.current.textContent = "";
      };
    }
  }, []);

  return (
    <div className={"intro" + (menuOpen ? " menu-open" : "")} id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/artur-pfpic.png" alt="profile pic" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello there, I'm</h2>
          <h1>Artur Wagner</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio" className="scroll">
          <img src="assets/down.png" alt="down-arrow" />
        </a>
      </div>
    </div>
  );
}
