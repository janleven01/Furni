const OfferProducts = ({
  name,
  label,
  imgURL
}) => {
  return (
    <div className="flex justify-between ">

      {/* PRODUCT IMAGE */}
      <div className="relative">
        <img 
          src={imgURL} 
          alt="" 
          className="w-64 h-36 object-contain z-10 relative"
        />
        <div className="absolute z-0 w-9/12 h-5/6 bottom-[10%] left-[12%] right-[5%] bg-pcColor rounded-2xl"/>
      </div>

      {/* TEXT */}
      <div className="flex flex-col items-start justify-between py-3">
        <div className="font-bold font-fontF text-sm">{name}</div>
        <div className="text-subtextColor text-[15px] font-fontF">{label}</div>
        <button className="hover:text-black/50 font-fonF">
          Read More
        </button>
      </div>
    </div>
  )
}

export default OfferProducts