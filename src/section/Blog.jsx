import { blogs } from "../constants"
import { Link } from "react-router-dom";
import BlogCard from "../component/BlogCard"

const Blog = () => {
  return (
    <section className="max-container pt-44 pb-[15%] max-md:pb-[40%]">
      <div className="flex justify-between">
        <h1 className="text-[33px] leading-10 font-medium font-fontF">
          Recent Blog
        </h1>
        <Link
          to="/blog"
          className="font-fontF underline hover:no-underline text-[15px] font-medium"
        >
          View All Post
        </Link>
      </div>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 md:flex gap-6 pt-16">
        {blogs.slice(0, 3).map((blog, index) => (
          <Link to="/blog" key={index}>
            <BlogCard key={blog.label} {...blog} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Blog