import { plusIcon } from '../assets/icons'

const ProductCard = ({
    product,
    handleAddProduct,
}) => {

  return (
    <div className="text-slate-800 pb-20 relative group">
      <img
        src={product.imgURL}
        alt={product.name}
        className="object-cover relative z-20 duration-500 group-hover:translate-y-[-20px] drop-shadow-[0_15px_15px_#0007]"
      />
      <div className="absolute bottom-0 left-0 w-full h-0 bg-pcColor rounded-xl group-hover:h-4/6 transition-all duration-500 z-10"></div>
      <h4 className="relative z-20 text-center font-semibold font-fontF text-md pt-6 pb-2">
        {product.name}
      </h4>
      <h4 className="relative z-20 text-center font-extrabold font-fontF text-lg">
        ${product.price}
      </h4>
      <div onClick={() => handleAddProduct(product)}>
        <img
          src={plusIcon}
          alt="plus-icon" 
          className="absolute z-20 bg-black rounded-full p-1 w-10 h-10 bottom-0 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-[-20px] transition-all duration-500"
        />
      </div>
    </div>
  );
}

export default ProductCard