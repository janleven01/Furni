const Form = ({
  label,
  type,
  id,
  name,
  placeholder,
  minLength,
  maxLength,
  min,
  max,
  noLabel,
  isRequired
}) => {

  const formStyles =
      "px-3 py-3 border rounded-xl border-primary/30 outline-none focus:border-primary placeholder:text-[14px]";
  return (
    <div className="flex flex-col gap-2">
      {noLabel ? (
        <input
          type={type}
          id={id}
          name={name}
          aria-label={label}
          minLength={minLength}
          maxLength={maxLength}
          min={min}
          max={max}
          placeholder={placeholder}
          className={formStyles}
          required
        />
        ) : (         
        <>
          <label
            htmlFor={id}
            className={`
          ${isRequired ? "required" : "text-[14px]"}
        `}
          >
            {label}
          </label>
          <input
            type={type}
            id={id}
            name={name}
            aria-label={label}
            minLength={minLength}
            maxLength={maxLength}
            min={min}
            max={max}
            placeholder={placeholder}
            className={formStyles}
            required
          />
        </>
        ) 
      }
    </div>
  );
}

export default Form