const BlogCard = ({
    name, 
    imgURL, 
    label, 
    date
}) => {
  return (
    <div className="flex flex-col">
      <img
        src={imgURL}
        alt=""
        className="object-contain rounded-2xl hover:opacity-75 transition-all duration-500"
      />
      <div className="p-4">
        <h3 className="font-fontF font-semibold text-black/75">{label}</h3>
        <h4 className="text-[14px] font-fontF pt-2 ">
          <span className="text-subtextColor">by</span>{" "}
          <span className="font-semibold text-black/75">{name}</span>{" "}
          <span className="text-subtextColor">on</span>{" "}
          <span className="font-semibold text-black/75">{date}</span>
        </h4>
      </div>
    </div>
  );
}

export default BlogCard