import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { HomePage } from "../../typings";
import { urlFor } from "../../sanity";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "../../styles/hero.module.scss";
import { Button } from "../Button";
import Link from "next/link";

type Props = {
  home: HomePage;
};

export const HomeApp = ({ home }: Props) => {
  const { info, photo, typewriterWords, name, curriculum, github, linkedin } =
    home;
  const [text] = useTypewriter({
    words: [...typewriterWords],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      key={home._id}
      className='text-white h-auto lg:h-screen pt-20 lg:pt-8 py-8 lg:py-0 flex flex-col-reverse gap-8 lg:gap-0 lg:flex-row overflow-hidden'>
      <div className='flex flex-1 items-center justify-center '>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className='font-bold tracking-widest space-y-4 lg:text-start text-center lg:max-w-md'>
          <h1 className='text-3xl lg:text-6xl uppercase'>{name}</h1>
          <h1 className='text-2xl lg:text-4xl uppercase'>
            I&apos;m a <span className='text-primary'>{text}</span>
            <Cursor cursorColor=' rgb(103, 58, 183)' />
          </h1>
          <p className='text-sm font-light max-w-sm'>{info}</p>
          <div className='flex gap-4 w-full items-center justify-center lg:justify-start'>
            <Link passHref href={github} target='_blank' rel='noreferrer'>
              <FaGithub className='text-2xl' />
            </Link>
            <Link passHref href={linkedin} target='_blank' rel='noreferrer'>
              <FaLinkedin className='text-2xl' />
            </Link>
            <Link passHref href={curriculum} target='_blank' rel='noreferrer'>
              <Button title='Download my CV' />
            </Link>
          </div>
        </motion.div>
      </div>
      <div className='flex flex-1 items-center justify-center'>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className={styles["box"]}>
          <div className={styles["spin-container"]}>
            <div className={styles["shape"]}>
              <div
                className={`${styles["bd"]}`}
                style={{
                  backgroundImage: `url(${urlFor(photo).url()})`,
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
