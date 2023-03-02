import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  img: string;
  title: string;
  desc: string;
};

export const SkillCard = ({ img, title, desc }: Props) => {
  return (
    <motion.div
      initial={{
        scale: 0,
        opacity: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      className='backdrop-brightness-75 border-r-4 border-primary flex rounded-3xl gap-2 h-36 w-full overflow-hidden shadow-[rgba(32,_10,_77,_1)_0px_2px_20px]'>
      <div className='md:flex hidden'>
        <Image
          width={200}
          height={200}
          draggable='false'
          src={img}
          alt='skillImg'
          className='object-cover scale-105'
        />
      </div>
      <div className='flex-1 flex-col py-4 px-4 space-y-2'>
        <h1 className='text-xl font-bold'>{title}</h1>
        <p className='opacity-50 text-sm'>{desc}</p>
      </div>
    </motion.div>
  );
};
