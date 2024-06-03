import Hero from "../section/Hero";
import ServicesCard from "../component/ServicesCard";
import PopularProducts from "../section/PopularProducts";
import Testimonials from "../section/Testimonials";
import { servicesPage } from "../constants";

const ServicesPage = ({productList}) => {
  return (
    <div>
      <header className="relative padding-x bg-primary overflow-hidden">
        <Hero title="Services" />
      </header>

      <section className="padding bg-secondary">
        <div className="max-container pt-20 pb-15">
          <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-3 gap-y-10">
            {servicesPage.map((service, index) => (
              <ServicesCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="padding bg-secondary">
        <div className="max-container">
          <PopularProducts productList={productList} />
        </div>
      </section>

      <section className="padding bg-secondary">
        <div className="pb-60">
          <Testimonials />
        </div>
      </section>
    </div>
  );
}

export default ServicesPage