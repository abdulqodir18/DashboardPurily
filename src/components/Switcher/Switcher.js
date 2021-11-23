import "./Switcher.scss";

function Switcher({ className = String, setState = Function, isActive = Boolean, text }) {

  return (
    <>
      <div className={`switcher-wrapper ${className}`}>
        <label className={`switcher switcher--${isActive}`}>
          <input
            className="radio visually-hidden"
            type="checkbox"
            name="state"
            defaultChecked={isActive && true}
            onChange={ e => setState(e.target.checked)}
          />
          <span className={`switcher-circle switcher-circle--${isActive}`} aria-label="switcher"></span>
        </label>
        {text && <p className="switcher-text">{text}</p>}
      </div>
    </>
  );
}
export default Switcher;
