import "./FormInput.scss";
function FormInput({className, placeholder, type, ref, labelText }) {
  return (
    <>
      <label className="label">
        {labelText && <span className="input-name">{labelText}</span>}
        <input className={`input ${className}` } ref={ref} type={type} placeholder={placeholder} />
      </label>
    </>
  );
}
export default FormInput;
