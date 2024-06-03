
const ServicesCard = ({
    iconURL,
    label,
    subtext
}) => {
  return (
    <div className="relative">
        <img src = {iconURL} alt="" 
            className="z-10 relative object-cover"
        />
        <div className="absolute top-3 left-5 z-0 p-4 bg-gray-300 rounded-full"/>
        <h3 className="pt-5 font-medium ">{label}</h3>
        <p className=" pt-2 text-[15px] text-subtextColor  ">{subtext}</p>
    </div>
  )
}

export default ServicesCard