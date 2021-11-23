import "./SignUp.scss";

import SignUpTop from "../../components/SignUpTop/SignUpTop";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

function SignUp() {
  return <>
    <div className="sign-up">
      <SignUpTop />
      <SignUpForm />
    </div>
  </>;
}
export default SignUp;
