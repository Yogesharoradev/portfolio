"use client";

import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface BlogworkProps {
  blog: string;
  subtitle?: string;
  tall?: boolean;
  shrink?: boolean;
  commission?: boolean;
}

const Blogwork: React.FC<BlogworkProps> = ({
  blog = "",
  subtitle = "Click anywhere to dismiss!",
  tall = false,
  shrink = false,
  commission = false,
}) => {
  const [clicked, setClicked] = useState(false);

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      setClicked(false);
    }
  }

  function disableRightClick(event: { preventDefault: () => void }) {
    if (commission) {
      event.preventDefault();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <>
      <Head>
        {clicked ? <title>Hemant · {blog}</title> : <title>Hemant</title>}
      </Head>

      {clicked && (
        <div
          className="blog_img_modal bg-blend-overlay flex flex-col justify-center items-center fixed text-center left-0 top-[50%] h-[200vh] w-[100vw] z-20 cursor-pointer select-none bg-elevation_six backdrop-blur-[12px]"
          tabIndex={0}
          onClick={() => setClicked(false)}
          onKeyDown={() => setClicked(false)}
          onContextMenu={disableRightClick}
          role="button"
          //   in:fly={{ y: 50, easing: quintOut, duration: 750 }}
          //   out:fly={{ y: 50, easing: cubicOut, duration: 300 }}
        >
          <h3 className="m-[1vh] text-[3.5vh] font-[500] text-text_primary">
            {blog}
          </h3>

          <div className="relative w-full h-full max-h-[83vh] max-w-[86vw] rounded-[2vh]">
            <Image
              className="w-fit object-cover rounded-[2vh] flex justify-center items-center"
              fill
              src={`/art/${blog}.webp`}
              alt={blog}
            />
          </div>

          <h6 className="m-[1vh] text-[2vh] mt-[2vh]">{subtitle}</h6>
        </div>
      )}

      <button
        className={cn(
          "relative border-none p-0 h-full w-full rounded-none md:rounded-[4px] overflow-hidden bg-elevation_one transition-[all_0.3s_var(--bezier-one)] cursor-pointer select-none bg-cover bg-no-repeat bg-center blog_card offset_ring",
          {
            blog_tall: tall,
            blog_shrink: shrink,
          }
        )}
        style={{
          backgroundImage: `url(art/${blog}.webp`,
        }}
        aria-label={blog}
        onClick={() => setClicked(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setClicked(true);
          }
        }}
      />
    </>
  );
};

export default Blogwork;
