import Blogwork from "../atoms/Blogwork";

const BlogGrid = () => {
  return (
    <div className="flex justify-center mb-16">
      <div
        className="grid gap-[0.2rem] md:gap-[0.8rem] flex-col justify-center items-center grid-cols-[1fr_1fr_1fr] md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] w-[min(100%,_75rem)] md:w-[min(90%,_72rem)] blog_grid"
        style={{
          gridAutoRows: "230px",
        }}
      >
        <Blogwork
          blog="frost"
          tall
          subtitle=""
          link=""
        />
        <Blogwork
          blog="deep"
          subtitle=""
          link=""
        />
        <Blogwork
          blog="rain"
          tall
          subtitle=""
          link=""
        />
        <Blogwork
          blog="purp"
          subtitle=""
          link=""
        />
        <Blogwork
          blog="makima"
          tall
          subtitle=""
          link=""
        />
        <Blogwork
          blog="ghost"
          tall
          subtitle=""
          link=""
        />
        <Blogwork
          blog="yoru"
          tall
          shrink
          commission
          subtitle=""
          link=""
        />
        <Blogwork
          blog="nisu"
          tall
          subtitle=""
          link=""
        />
        <Blogwork
          blog="lost"
          subtitle="dnd"
          link=""
        />
        <Blogwork
          blog="momi"
          subtitle=""
          link=""
        />
      </div>
    </div>
  );
};

export default BlogGrid;
