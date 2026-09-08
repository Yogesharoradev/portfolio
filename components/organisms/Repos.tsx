"use client";

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
import { useEffect, useState } from "react";

import { Repo } from "@/types";

const Repos: React.FC = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  const data = [
    {
      owner: "Yogesharoradev",
      repo: "Fitaah — Gym Management SaaS",
      link: "https://github.com/Yogesharoradev/gym-management-saas",
      description:
        "A production-ready multi-tenant gym management SaaS  built for real-world gym operations, covering members, memberships, attendance, payments, expiry & renewals, reports, authentication, and PDF receipts with a responsive admin experience.",
      image: "",
      website: "",
      language: "Next.js, TypeScript, MongoDB, Tailwind",
      languageColor: "#3178c6",
      stars: "0",
      forks: "0",
    },
    {
      owner: "Yogesharoradev",
      repo: "ChatWave",
      link: "https://chatwave-frontend.vercel.app/",
      description:
        "A real-time chat application with responsive messaging, group conversations, live updates, and a modern interface powered by React, Node.js, Socket.IO, and MongoDB.",
      image: "",
      website: "",
      language: "React, Node.js, Socket.IO, MongoDB",
      languageColor: "#3178c6",
      stars: "4",
      forks: "0",
    },
    {
      owner: "Yogesharoradev",
      repo: "LMS Learn",
      link: "https://lmslearn.netlify.app",
      description:
        "A full-stack learning management platform where users can discover courses, view course details, enroll through PayPal payments, and access a responsive learning experience across devices.",
      image: "",
      website: "",
      language: "React, Node.js, PayPal, Ant Design",
      languageColor: "#3178c6",
      stars: "0",
      forks: "0",
    },
    {
      owner: "Yogesharoradev",
      repo: "YoutubeClone",
      link: "https://yuvi-youtubeclone.netlify.app",
      description:
        "A responsive YouTube-inspired video platform built with React and the YouTube API, featuring real-time video search, browsing, categories, and video playback.",
      image: "",
      website: "",
      language: "React, YouTube API",
      languageColor: "#3178c6",
      stars: "5",
      forks: "0",
    },
    {
      owner: "Yogesharoradev",
      repo: "BlogProject1",
      link: "https://yuviblogproject.netlify.app",
      description:
        "A responsive React blogging platform focused on clean content discovery and reading, allowing users to browse and explore blog posts through a simple, modern interface.",
      image: "https://opengraph.githubassets.com/1/piyushgarg-dev//revie-app",
      website: "",
      language: "React",
      languageColor: "#3178c6",
      stars: "0",
      forks: "0",
    },
    {
      owner: "Yogesharoradev",
      repo: "nextAuth",
      link: "https://github.com/Yogesharoradev/nextAuth",
      description:
        "A Next.js authentication-focused project demonstrating secure login flows, protected routes, session handling, and backend-integrated authentication patterns.",
      image: "",
      website: "",
      language: "Next.js, Authentication",
      languageColor: "#3178c6",
      stars: "0",
      forks: "0",
    },
  ];

  useEffect(() => {
    setRepos(data);
  }, []);

  return (
    <section className="wrapper pb-5 md:pb-0" id="work">
      <div className="title flex justify-start mt-0 md:justify-center">
        <h2 className="inline-block mb-4">
          <span className="text-accent">code</span>:work
        </h2>
      </div>

      <div className="gap-[.8rem] flex-col justify-center items-center grid grid-cols-[1fr] md:grid-cols-[1fr_1fr] mb-8 md:mb-12 relative">
        {repos.length > 0 ? (
          repos.map(
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
                className="no-underline text-text_primary h-full rounded-[8px] offset_ring"
                href={link}
                key={link}
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  posthog.capture(`Repo(${repo}) link clicked`, {
                    Clicked: true,
                  });
                }}
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
                      {/* <Image
                        width={16}
                        height={16}
                        src={`https://github.com/${owner.split("/")[0]}.png`}
                        alt={`${owner}'s profile picture`}
                        id="pfp"
                        className="rounded-[50%]"
                      /> */}
                      <h6 className="font-jetbrains">{owner.split("/")[0]}</h6>
                    </div>
                    <div>
                      <svg
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        id="open"
                        className="open_new_window_icon h-[20px] transition-[filter_.3s_var(--bezier-one)] group-hover:brightness-[1.3]"
                      >
                        <path
                          d="M21 3h-6m6 0l-9 9m9-9v6"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M21 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6"
                          stroke="#BDA3A2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-spacegrotesk">{repo}</h3>
                    <h6 className="font-jetbrains">{description}</h6>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="info flex gap-[.2rem] items-center">
                      <span
                        className="dot h-[11px] w-[11px] rounded-[50%] inline-block text-accent"
                        style={{ backgroundColor: languageColor }}
                      />
                      <h6 className="font-jetbrains">{language}</h6>
                    </div>
                    {forks > 0 && (
                      <div className="info flex gap-[.2rem] items-center">
                        <Image
                          width={16}
                          height={16}
                          className="h-[17px]"
                          src="/icons/fork.svg"
                          id="fork"
                          alt="fork"
                        />
                        <h6 className="font-jetbrains">{forks}</h6>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ),
          )
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
