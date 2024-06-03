import ProductCard from "../component/ProductCard";
import Hero from "../section/Hero";

const Shop = ({ productList, handleAddProduct }) => {
  return (
    <div>
      <header className="relative padding-x bg-primary overflow-hidden">
        <Hero title="Shop" />
      </header>

      <section className=" relative padding bg-secondary">
        <div className="max-container py-32">
          <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-12">
            {productList.map((product, index) => (
              <div key={index} className="">
                <ProductCard
                  product={product}
                  handleAddProduct={handleAddProduct}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop