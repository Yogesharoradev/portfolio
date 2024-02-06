import Tooltip from "../atoms/Tooltip";
import BlogGrid from "../molecules/BlogGrid";

const Blog: React.FC = () => {
  return (
    <section>
      <div
        className="wrapper flex justify-start mt-0 mb-[0.3rem] md:mb-0 md:justify-center"
        id="aw"
      >
        <Tooltip tip="Click on an blogwork">
          <h2 className="inline-block mb-4">
            <span className="text-accent">blog</span>:work
          </h2>
        </Tooltip>
      </div>
      <BlogGrid />
    </section>
  );
};

export default Blog;
