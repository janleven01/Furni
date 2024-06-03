import Hero from "../section/Hero";
import Contact from "../section/Contact";

const ContactUs = () => {
  return (
    <div>
      <header className="relative padding-x bg-primary overflow-hidden">
        <Hero title="Contact Us" />
      </header>

      <section className="padding bg-secondary">
        <div className="pt-20 pb-40">
          <Contact />
        </div>
      </section>
    </div>
  );
}

export default ContactUs