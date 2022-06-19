import "react";
import { Link } from "react-router-dom";
//import "../styles.css";
import "../nav.css";
import "./navFix.css";
import background from "../megaman-banner-cropped.png";

export const Navbar = () => {
  const styleShortcut = {
    backgroundBlendMode: "overlay",
    backgroundImage: `url(${background})`,
    backgroundColor: "rgba(225, 0, 235, .3)"
  };

  /*
  <h1>Megaman ROM Map Blob</h1>
  */

  return (
    <nav style={styleShortcut}>
      <section>
        <div className="navHeader">Megaman 2 Rom Map Blob</div>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Entities</Link>
            <Link to="/Header">Header</Link>
            <Link to="/Changes">Changes</Link>
            <Link to="/JSONOutput">JSON Output</Link>
            <Link to="/Randomize">Randomize</Link>
            <Link to="/Patcher">Patcher</Link>
          </div>
        </div>
      </section>
    </nav>
  );

  /*
  return (
    <nav style={styleShortcut}>
      <section>
        <div className="navHeader">Megaman 2 Rom Map Blob</div>

        <div className="navContent">
          <div className="navLinks">
            <Link to="/">Entities</Link>
            <Link to="/Header">Header</Link>
            <Link to="/Changes">Changes</Link>
            <Link to="/JSONOutput">JSON Output</Link>
            <Link to="/Patcher">Patcher</Link>
          </div>
        </div>
      </section>
    </nav>
  );*/
};
