import logo from "../../assets/bitmoji.png";
import LangSelector from "../lang-selector/lang-selector.jsx";
import style from "./header.module.css";

const Header = () => (
  <header>
    <a href="#">
      <img draggable="false" className={style.bitmoji} src={logo} alt="" />
    </a>
    <nav className={style.menu}>
      <ul className={style.menuList}>
        <li className={style.menuItem}>
          <a className={style.menuLink} href="#aboutMe">
            About me
          </a>
        </li>
        <li className={style.menuItem}>
          <a className={style.menuLink} href="#myWork">
            My work
          </a>
        </li>
        <li className={style.menuItem}>
          <a className={style.menuLink} href="#links">
            Links
          </a>
        </li>
        <li className={style.menuItem}>
          <a className={style.menuLink} href="#contact">
            Contact
          </a>
        </li>
      </ul>
      <LangSelector />
    </nav>
  </header>
);
export default Header;
