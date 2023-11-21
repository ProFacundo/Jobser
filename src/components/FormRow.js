const FormRow = ({ type, name, handleChange, labelText, value }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={handleChange}
        value={value}
        className="form-input"
      />
    </div>
  );
};
export default FormRow;
