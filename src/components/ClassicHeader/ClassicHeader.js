import "../../Assets/SCSS/Buttons.scss";
import "./ClassicHeader.scss";

import { Link } from "react-router-dom";

import DashboardIcon from "../Svgs/DashboardIcon";
import LogoWhite from "../Svgs/LogoWhite";
import ProfileIcon from "../Svgs/ProfileIcon";
import SignUpIcon from "../Svgs/SignUpIcon";
import SignInIcon from "../Svgs/SignInIcon";

function ClassicHeader({ theme }) {
  return (
    <>
      <header className={`sign-up__header classic-header classic-header--${theme}`}>
        <Link className="classic-header__logo-link" to="/">
          <LogoWhite />
        </Link>
        <nav className="classic-header__nav">
          <ul className="classic-header__list">
            <li className="classic-header__item">
              <Link className="classic-header__link" to="/">
                <DashboardIcon />
                <p className="classic-header__text">DASHBOARD</p>
              </Link>
            </li>
            <li className="classic-header__item">
              <Link className="classic-header__link" to="/">
                <ProfileIcon />
                <p className="classic-header__text">Profile</p>
              </Link>
            </li>
            <li className="classic-header__item">
              <Link className="classic-header__link" to="/">
                <SignUpIcon />
                <p className="classic-header__text">Sign Up</p>
              </Link>
            </li>
            <li className="classic-header__item">
              <Link className="classic-header__link" to="/">
                <SignInIcon />
                <p className="classic-header__text">Sign In</p>
              </Link>
            </li>
          </ul>
        </nav>
        <button className="classic-header__btn" type="button">
          Free Download
        </button>
        <button className="classic-header__btn-gmbur gammburger-btn" aria-label="button" type="button"></button>
      </header>
    </>
  );
}
export default ClassicHeader;
