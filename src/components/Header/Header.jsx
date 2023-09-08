import Svg from "./SVG";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <nav className="header__nav">
        <div className="header__nav-1">
          <Svg />
        </div>
      </nav>
    </div>
  );
}

export default Header;
