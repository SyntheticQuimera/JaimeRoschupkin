import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  img: string;
};

export const SkillBadgeComp = ({ img }: Props) => {
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
      className='flex rounded-lg overflow-hidden'>
      <Image
        width={100}
        height={100}
        draggable='false'
        src={img}
        alt='skill'
        className='object-contain h-16 w-16 sm:h-20 sm:w-20'
      />
    </motion.div>
  );
};
