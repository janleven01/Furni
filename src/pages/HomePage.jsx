import Hero from "../section/Hero";
import PopularProducts from "../section/PopularProducts";
import Services from "../section/Services";
import Offer from "../section/Offer";
import Testimonials from "../section/Testimonials";
import Blog from "../section/Blog";


const HomePage = ({ handleAddProduct, productList }) => {
  return (
    <main>
      <section className="padding-x bg-primary overflow-hidden">
        <Hero title="Modern Interior Design Studio" />
      </section>
      <section className="padding bg-secondary">
        <PopularProducts
          handleAddProduct={handleAddProduct}
          productList={productList}
        />
      </section>
      <section className="padding bg-secondary">
        <Services />
      </section>
      <section className="padding bg-secondary">
        <Offer />
      </section>
      <section className="padding bg-secondary">
        <Testimonials />
      </section>
      <section className="padding bg-secondary">
        <Blog />
      </section>
    </main>
  );
};

export default HomePage;
