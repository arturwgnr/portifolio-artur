import "./topbar.scss";
import { FaUser, FaPaperPlane } from "react-icons/fa";

export default function Topbar({ menuOpen, setMenuOpen }) {
  function handleMenuOpening() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            aw.inc
          </a>
          <div className="item-container">
            <FaUser className="icon" />
            <span className="span">+323 0832009894</span>
          </div>
          <div className="item-container">
            <FaPaperPlane className="icon" />
            <span className="span">arturwagner99@hotmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburguer" onClick={handleMenuOpening}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
