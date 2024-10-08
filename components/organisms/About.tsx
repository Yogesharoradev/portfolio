"use client";

import React, { useEffect, useState } from "react";

import Tooltip from "@/components/atoms/Tooltip";
import Link from "next/link";
import posthog from "posthog-js";
import HeroImage from "../atoms/HeroImage";

const About: React.FC = () => {
  const [age, setAge] = useState<ReturnType<typeof getAge>>();

  // i didnt write this idk
  const getAge = () => {
    let birthDate = new Date("1998/08/04");
    const ageMs = Date.now() - birthDate.getTime();
    const preciseAge = (ageMs / 31536000000).toFixed(10);
    return preciseAge;
  };

  useEffect(() => {
    setAge(getAge());
    setInterval(() => {
      setAge(getAge());
    }, 1000);
  }, []);

  return (
    <section
      id="about"
      className="wrapper flex flex-col md:flex-row mb-24 md:grid grid-cols-[1fr_1fr] md:items-center gap-16"
    >
      <div>
      <HeroImage imageUrl="/afn.webp" />
      </div>
      <div
        className="relative leading-[1.75rem] 
            before:content-['Yog'] before:h-[300px] before:text-[150px] before:font-[700] before:-z-10 before:select-none before:translate-x-[130%] before:translate-y-[8%] webkit_text_stroke before:opacity-[0.22] before:absolute
            after:content-['esh'] after:h-[300px] after:text-[200px] after:font-[700] after:-z-10 after:select-none after:translate-x-[140%] after:translate-y-[-35%] webkit_text_stroke_after after:opacity-[0.22] after:absolute
            "
      >
        <h2 className="md:hidden mb-4 md:mt-4 md:mb-0">bio</h2>
        <div className="text-text_secondary font-[300] text-[1.1rem] tracking-[-0rem] leading-[1.75rem]">
          Hey there, I&rsquo;m Yogesh! :] I&rsquo;m a{" "}
          {age && (
            <Tooltip tip={age}>
              <span className="bio_span">{Math.floor(Number(age))}</span>
            </Tooltip>
          )}{" "}
          year old Backend developer. I&rsquo;ve
          taken coding seriously since <span className="bio_span">2023</span>
          . Recently, however, I&rsquo;ve grown a knack for giving back to
          community. I like contributing to{" "}
          <Tooltip tip="🤓">
            <Link
              className="no-underline offset_ring rounded-[7px]"
              href="https://github.com/Yogesharoradev"
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                posthog.capture('"open source" link clicked', {
                  Clicked: true,
                });
              }}
            >
              <span className="bio_span">open source</span>
            </Link>
          </Tooltip>{" "}
          as a web developer, which is probably the reason why you&rsquo;ve
          ended up here. Currently struggling with geting master at frontend.
        </div>
      </div>
    </section>
  );
};

export default About;
