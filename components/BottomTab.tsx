import React, { useState } from "react";
import Link from "next/link";
import {
  HomeIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

export const BottomTab = () => {
  const [activeNav, setActiveNav] = useState("#home");

  const activeNavStyle = (activeNav: string, state: string) => {
    return activeNav === state
      ? "h-full w-full  items-center justify-center flex text-primary transition ease-in-out delay-150 duration-150"
      : "h-full w-full items-center justify-center flex text-white transition ease-in-out delay-150 duration-150";
  };

  return (
    <div className='md:hidden w-full items-center justify-center flex fixed top-0 z-50'>
      <div className='backdrop-blur-md backdrop-brightness-75 flex w-full h-14 items-center overflow-hidden justify-evenly'>
        <Link
          passHref
          href='#home'
          onClick={() => setActiveNav("#home")}
          className={`${activeNavStyle(activeNav, "#home")}`}>
          <HomeIcon className='h-6 w-6' />
        </Link>
        <Link
          passHref
          href='#aboutMe'
          onClick={() => setActiveNav("#aboutMe")}
          className={`${activeNavStyle(activeNav, "#aboutMe")}`}>
          <CodeBracketIcon className='h-6 w-6' />
        </Link>
        <Link
          passHref
          href='#projects'
          onClick={() => setActiveNav("#projects")}
          className={`${activeNavStyle(activeNav, "#projects")}`}>
          <BriefcaseIcon className='h-6 w-6' />
        </Link>
        <Link
          passHref
          href='#contactMe'
          onClick={() => setActiveNav("#contactMe")}
          className={`${activeNavStyle(activeNav, "#contactMe")}`}>
          <ChatBubbleBottomCenterTextIcon className='h-6 w-6' />
        </Link>
      </div>
    </div>
  );
};
