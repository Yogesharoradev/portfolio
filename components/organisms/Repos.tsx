"use client";

import { useEffect, useState } from "react";

import { Repo } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Repos: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const response = await fetch(
        "https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=hemantwasthere"
      );
      setRepos(await response.json());
    };
    fetchRepos();
  }, []);

  return (
    <section className="wrapper pb-5 md:pb-0" id="work">
      <div className="title flex justify-start mt-0 md:justify-center">
        <h2 className="inline-block mb-4">
          <span className="text-yellow">code</span>:work
        </h2>
      </div>

      <div className="gap-[.8rem] flex-col justify-center items-center grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] mb-8 md:mb-12 relative before:content-['𝝺'] before:h-[300px] before:text-[175px] before:-z-10 before:select-none before:translate-x-[1140%] before:translate-y-[-50%] webkit_text_stroke before:opacity-[0.25] before:tracking-[-0.075em] before:absolute">
        {repos.length > 0 ? (
          <>
            {repos.map(
              ({
                link,
                owner,
                repo,
                description,
                languageColor,
                language,
                stars,
                forks,
              }) => (
                <Link
                  className="no-underline text-white h-full rounded-[8px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow ring-1 ring-transparent transition duration-500"
                  href={link}
                  key={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className="repo_card group"
                    style={{
                      transition:
                        "transform 0.3s var(--bezier-one), box-shadow 0.3s var(--bezier-one)",
                    }}
                  >
                    <div id="top-part" className="flex justify-between">
                      <div className="info flex gap-[.2rem] items-center">
                        <Image
                          width={16}
                          height={16}
                          src={`https://github.com/${owner.split("/")[0]}.png`}
                          alt="{owner}'s profile picture"
                          id="pfp"
                          className="rounded-[50%]"
                        />
                        <h6 className="font-jetbrains">
                          {owner.split("/")[0]}
                        </h6>
                      </div>
                      <div>
                        <Image
                          width={20}
                          height={20}
                          src="icons/open.svg"
                          alt="open in new tab"
                          id="open"
                          className="h-[20px] transition-[filter_.3s_var(--bezier-one)] group-hover:brightness-[1.3]"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-spacegrotesk">{repo}</h3>
                      <h6 className="font-jetbrains">{description}</h6>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="info flex gap-[.2rem] items-center">
                        <span
                          className="dot h-[11px] w-[11px] rounded-[50%] inline-block text-yellow"
                          style={{ backgroundColor: languageColor }}
                        />
                        <h6 className="font-jetbrains">{language}</h6>
                      </div>
                      <div className="info flex gap-[.2rem] items-center">
                        {stars.length > 0 && (
                          <>
                            <Image
                              width={16}
                              height={16}
                              className="h-[16px] w-auto translate-y-[-1px]"
                              src="icons/star.svg"
                              id="star"
                              alt="star"
                            />
                            <h6 className="font-jetbrains">{stars}</h6>
                          </>
                        )}
                      </div>
                      <div className="info flex gap-[.2rem] items-center">
                        {forks.length > 0 && (
                          <>
                            <Image
                              width={16}
                              height={16}
                              className="h-[17px]"
                              src="icons/fork.svg"
                              id="fork"
                              alt="fork"
                            />
                            <h6 className="font-jetbrains">{forks}</h6>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            )}
          </>
        ) : (
          <>
            <div className="repo_card shimmer" />
            <div className="repo_card shimmer" />
            <div className="repo_card shimmer" />
            <div className="repo_card shimmer" />
          </>
        )}
      </div>
    </section>
  );
};

export default Repos;
