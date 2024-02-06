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
        <Blogwork blog="painted_red" tall />
        <Blogwork blog="drowning" />
        <Blogwork blog="BL1NG!" tall />
        <Blogwork blog="811" />
        <Blogwork blog="FADE" tall subtitle="Acrylic Paint" />
        <Blogwork blog="diverge" tall />
        <Blogwork
          blog="flandre"
          tall
          shrink
          commission
          subtitle="Commissioned by Kevin T. · Do not use"
        />
        <Blogwork blog="ribbons" tall />
        <Blogwork blog="asumi" />
        <Blogwork blog="doodle" />
      </div>
    </div>
  );
};

export default BlogGrid;
