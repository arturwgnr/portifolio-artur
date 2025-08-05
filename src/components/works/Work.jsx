import "./work.scss";
import { useState } from "react";

export default function Work() {
  const data = [
    {
      id: 1,
      icon: "assets/mobile.png",
      title: "Mobile App",
      desc: "Interface para dispositivos móveis.",
      img: "assets/mobileapp.png",
    },
    {
      id: 2,
      icon: "assets/pc.png",
      title: "Web Dashboard",
      desc: "Painel de administração moderno.",
      img: "assets/example.png",
    },
    {
      id: 3,
      icon: "assets/net.png",
      title: "E-commerce",
      desc: "Plataforma de vendas online.",
      img: "assets/squareplace.png",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating] = useState(false);

  const handleClick = (direction) => {
    setAnimating(true);
    setTimeout(() => {
      if (direction === "left") {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : data.length - 1));
      } else {
        setCurrentSlide((prev) => (prev < data.length - 1 ? prev + 1 : 0));
      }
    }, 300);
    setTimeout(() => setAnimating(false), 600);
  };

  return (
    <div className="work" id="work">
      <div className="arrow left-arrow" onClick={() => handleClick("left")}>
        <h2 className="h2-arrow">⮜</h2>
      </div>

      <div className="slider">
        <div className="container">
          <div
            className={`item ${animating ? "fade-out" : "fade-in"}`}
            key={currentSlide}
          >
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img
                    className="phone-img"
                    src={data[currentSlide].icon}
                    alt="mobile-phone"
                  />
                </div>
                <h2>{data[currentSlide].title}</h2>
                <p>{data[currentSlide].desc}</p>
                <a href="#portfolio" className="scroll">
                  Projects
                </a>
              </div>
            </div>

            <div className="right">
              <img
                className="right-img"
                src={data[currentSlide].img}
                alt="ex"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="arrow right-arrow" onClick={() => handleClick("right")}>
        <h2 className="h2-arrow">⮞</h2>
      </div>
    </div>
  );
}
