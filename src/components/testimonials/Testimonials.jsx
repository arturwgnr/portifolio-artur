import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Alan Turing",
      title: "Father of Modern Computing",
      img: "assets/alan2.png",
      icon: "assets/x.jpg",
      desc: "If machines could think, he’d be the one building them. Remarkable potential.",
      featured: false,
    },
    {
      id: 2,
      name: "Steve Jobs",
      title: "Co-founder of Apple",
      img: "assets/steve.jpg",
      icon: "assets/ytb.png",
      desc: "He's not just building apps. He's building revolutions. Keep an eye on him.",
      featured: true,
    },
    {
      id: 3,
      name: "Mark Zuckerberg",
      title: "CEO of Meta",
      img: "assets/mark.png",
      icon: "assets/insta.png",
      desc: "He’s sharp, fast, and thinks in systems. Just give him access the rest will follow.",
      featured: false,
    },
  ];

  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>

      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"} key={d.id}>
            <div className="top">
              <span className="left">➥</span>
              <img className="user" src={d.img} alt={d.name} />
              <img className="right" src={d.icon} alt="icon" />
            </div>

            <div className="center">"{d.desc}"</div>

            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
