import { useState } from "react"

const Payment = ({label, content, containerHeight}) => {

  const [isOpen, setIsOpen] = useState(false)
  
  const handleClick = () => {
    setIsOpen(!isOpen)
  }


  return (
    <div>
      <div className="border p-3">
        <button
          onClick={() => handleClick(true)}
          className="w-full text-black/80 underline hover:no-underline text-start font-fontF text-[14px]"
        >
          {label}
        </button>
        <p
          className={`font-fontF text-subtextColor text-[14px] pt-2 transition-all duration-700 ease-in-out overflow-hidden
            ${isOpen ? "max-h-40" : "max-h-0"}
        `}
        >
          {content}
        </p>
      </div>
    </div>
  );
}

export default Payment