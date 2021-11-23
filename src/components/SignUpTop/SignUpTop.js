import "./SignUpTop.scss";
import ClassicHeader from "../ClassicHeader/ClassicHeader";

function SignUpTop() {
  return (
    <>
      <section className="sign-up__top">
        <ClassicHeader theme="light" />
        <h2 className="sign-up__title">Welcome!</h2>
        <p className="sign-up__intro-text">
          Use these awesome forms to login or create new account in your project
          for free.
        </p>
      </section>
    </>
  );
}
export default SignUpTop;
