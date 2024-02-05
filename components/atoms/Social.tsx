"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import Tooltip from "@/components/atoms/Tooltip";

interface SocialProps {
  icon: string;
  tip: string;
  link: string;
}

const Social: React.FC<SocialProps> = ({ icon, tip, link }) => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  // checking if the link has focus state or not
  useEffect(() => {
    const handleFocus = () => setActive(true);
    const handleBlur = () => setActive(false);

    const current = ref?.current! as HTMLAnchorElement;

    current?.addEventListener("focus", handleFocus);
    current?.addEventListener("blur", handleBlur);

    return () => {
      current?.removeEventListener("focus", handleFocus);
      current?.removeEventListener("blur", handleBlur);
    };
  }, [active]);

  return (
    <Tooltip tip={tip} active={active}>
      <div className="transition-all group">
        <Link
          className="transition-all flex justify-center items-center w-[50px] h-[50px] bg-transparent border-none rounded-[10px] cursor-pointer group-hover:bg-neutral_one active:scale-[95%] offset_ring"
          href={link}
          target="_blank"
          rel="noreferrer"
          ref={ref}
        >
          <Image
            className="opacity-70 transition-all group-hover:opacity-100"
            width={26}
            height={26}
            src={`/icons/${icon}.svg`}
            alt={icon}
          />
        </Link>
      </div>
    </Tooltip>
  );
};

export default Social;
