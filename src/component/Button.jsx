const Button = ({
    label,
    backgroundColor,
    textColor,
    borderColor,
    hover
}) => {
  return (
    <div>
        <button
            className={`px-8 py-3 rounded-full border-2 font-semibold text-lg cursor-pointer
            ${backgroundColor 
                ?`${backgroundColor} ${textColor} ${borderColor} ${hover}`
                :'border-white/50 text-white bg-transparent hover:border-white'}
            `}
        >
            {label}
        </button>
    </div>
  )
}

export default Button