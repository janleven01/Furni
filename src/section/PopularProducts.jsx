import Button from '../component/Button'
import ProductCard from '../component/ProductCard'

const PopularProducts = ({ handleAddProduct, productList }) => {

  return (
    <section className="max-container py-6">
      <div className="flex max-lg:flex-col pt-20">
        <div className="w-full xl:max-w-[330px] lg:max-w-[250px]">
          <h1 className="text-[35px] leading-10 font-medium font-fontF ">
            Crafted with excellent material.
          </h1>
          <p className="text-subtextColor py-8">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <Button
            label="Explore"
            backgroundColor="bg-black/80"
            borderColor="border-none"
            textColor="text-white"
            hover="hover:bg-black/90"
          />
        </div>
        <div className="flex justify-between items-center w-full gap-3 max-lg:pt-16 max-md:flex-col max-md:space-y-10">
          {productList.slice(0, 3).map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              handleAddProduct={handleAddProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts