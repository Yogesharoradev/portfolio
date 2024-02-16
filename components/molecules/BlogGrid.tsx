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
          blog="zoro"
          tall
          subtitle="docker networking"
          link="https://blog.hemant.social/docker"
        />
        <Blogwork
          blog="hisoka"
          subtitle="graphql"
          link="https://blog.hemant.social/graphql"
        />
        <Blogwork
          blog="gojo"
          tall
          subtitle="kafka"
          link="https://blog.hemant.social/kafka"
        />
        <Blogwork
          blog="kakashi"
          subtitle="whisper"
          link="https://blog.hemant.social/whisper"
        />
        <Blogwork
          blog="killua"
          tall
          subtitle="cloudflare"
          link="https://blog.hemant.social/cloudflare"
        />
        <Blogwork
          blog="spidermon"
          tall
          subtitle="moving gradients"
          link="https://blog.hemant.social/moving-gradients"
        />
        <Blogwork
          blog="shanks"
          tall
          shrink
          commission
          subtitle="grid"
          link="https://blog.hemant.social/grid"
        />
        <Blogwork
          blog="nom"
          tall
          subtitle="zustand"
          link="https://blog.hemant.social/zustand"
        />
        <Blogwork
          blog="todu"
          subtitle="dnd"
          link="https://blog.hemant.social/drag-n-drop"
        />
        <Blogwork
          blog="boo"
          subtitle="evolution"
          link="https://blog.hemant.social/evolution-of-frontend-development"
        />
      </div>
    </div>
  );
};

export default BlogGrid;
