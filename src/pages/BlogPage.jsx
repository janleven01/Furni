import Hero from "../section/Hero";
import BlogCard from "../component/BlogCard";
import Testimonials from "../section/Testimonials";
import { blogPage } from "../constants";

const BlogPage = () => {
  return (
    <div>
      <header className="relative padding-x bg-primary overflow-hidden">
        <Hero title="Blog" />
      </header>

      <section className="padding bg-secondary">
        <div className="max-container py-20">
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-x-7 gap-y-9">
            {blogPage.map((blog, index) => (
              <BlogCard key={index} {...blog} />
            ))}
          </div>
        </div>
      </section>

      <section className="padding bg-secondary">
        <div className="pb-52">
          <Testimonials />
        </div>
      </section>
    </div>
  );
}

export default BlogPage