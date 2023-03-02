import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./Button";
import Image from "next/image";

export const Header = () => {
  const [showNavBack, setShowNavBack] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShowNavBack(true);
    } else {
      setShowNavBack(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  const [activeNav, setActiveNav] = useState("#home");

  const activeNavStyle = (activeNav: string, state: string) => {
    return activeNav === state
      ? "border-b-2 border-primary transition scale-100 ease-in-out delay-150 duration-300"
      : "border-b-2 border-transparent transition scale-0 ease-in-out delay-150 duration-300";
  };

  return (
    <motion.div
      initial={{
        y: -200,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className={`hidden ${
        showNavBack && "bg-[hsla(240,46%,16%,1)]"
      } text-white  md:flex top-0 z-10 fixed w-screen h-16 items-center justify-between 
      px-16 xl:px-[128px] transition duration-500 ease-in-out`}>
      <div className='bg-gradient-to-r from-gradientFrom to-gradientTo flex items-center justify-center w-12 h-12 rounded-full'>
        <Image
          draggable='false'
          src='/logo.svg'
          alt='logo'
          width={22}
          height={22}
        />
      </div>
      <div
        className='md:inline-flex space-x-8 items-center justify-center 
        transition duration-500 ease-in-out'>
        <Link passHref href='#home' onClick={() => setActiveNav("#home")}>
          <button>Home</button>
          <div className={`${activeNavStyle(activeNav, "#home")}`} />
        </Link>
        <Link passHref href='#aboutMe' onClick={() => setActiveNav("#aboutMe")}>
          <button>About Me</button>
          <div className={`${activeNavStyle(activeNav, "#aboutMe")}`} />
        </Link>
        <Link
          passHref
          href='#projects'
          onClick={() => setActiveNav("#projects")}>
          <button>Projects</button>
          <div className={`${activeNavStyle(activeNav, "#projects")}`} />
        </Link>
        <Link
          passHref
          href='#contactMe'
          onClick={() => setActiveNav("#contactMe")}>
          <Button title="Let's talk" />
        </Link>
      </div>
    </motion.div>
  );
};
