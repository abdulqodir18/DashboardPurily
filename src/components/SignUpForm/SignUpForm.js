import "../../Assets/SCSS/Buttons.scss";
import "./SignUpForm.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

import FormInput from "../FormInput/FormInput";
import Switcher from "../Switcher/Switcher";

import FacebookIcon from "../Svgs/Facebook";
import AppleIcon from "../Svgs/Apple";
import GoogleIcon from "../Svgs/Google";

function SignUpForm() {

  const [switchState, setSwitchState] = useState(false);

  return (
    <>
      <section className="sign-up__form-section">
        <h3 className="sign-up__form-title">Register with</h3>

        <ul className="sign-up__with-social">
          <li className="sign-up__with-social-item">
            <Link className="sign-up__with-social-link" to="facebook.com">
              <FacebookIcon />
            </Link>
          </li>
          <li className="sign-up__with-social-item">
            <Link className="sign-up__with-social-link" to="apple.com">
              <AppleIcon />
            </Link>
          </li>
          <li className="sign-up__with-social-item">
            <Link className="sign-up__with-social-link" to="google.com">
              <GoogleIcon />
            </Link>
          </li>
        </ul>

        <span className="sign-up__span">Or</span>

        <form className="sign-up__form">
          <FormInput placeholder="Your full name" labelText="Name" type="text"/>
          <FormInput placeholder="Your email address" labelText="Email" type="email"/>
          <FormInput placeholder="Your password" labelText="Password" type="password"/>
          <Switcher setState={setSwitchState} text="Remember me" isActive={switchState} />
          <button className="form-btn sign-up__btn" type="submit">SIGN IN</button>
        </form>
      </section>
    </>
  );
}
export default SignUpForm;


