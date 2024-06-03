import Hero from "../section/Hero";
import Services from "../section/Services";
import Team from "../section/Team";
import Testimonials from "../section/Testimonials";

const About = () => {
  return (
    <div>
      <header className="relative padding-x bg-primary overflow-hidden">
        <Hero title="About" />
      </header>

      <section className="padding bg-secondary">
        <div className="max-container py-20">
          <Services />
        </div>
      </section>

      <section className="padding bg-secondary">
          <Team />
      </section>

      <section className="padding bg-secondary">
        <div className="pb-52">
          <Testimonials />
        </div>
      </section>
    </div>
  );
}

export default About