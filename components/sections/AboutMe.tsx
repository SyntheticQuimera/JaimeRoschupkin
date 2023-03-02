import React from "react";
import { motion } from "framer-motion";
import { urlFor } from "../../sanity";
import { SkillBadgeComp } from "../SkillBadgeComp";
import { AboutMeInfo, Service, SkillBadge } from "../../typings";
import { SkillCard } from "../SkillCard";
import Image from "next/image";
type Props = {
  aboutMeInfo: AboutMeInfo;
  services: Service[];
  skillBadge: SkillBadge[];
};

export const AboutMe = ({ services, skillBadge, aboutMeInfo }: Props) => {
  return (
    <>
      {/* <HeaderTitle title='Services' /> */}

      <div className='flex flex-col lg:flex-row gap-16 lg:gap-0 pt-24'>
        <div className='flex-1 px-4 lg:px-0 flex items-start justify-center'>
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
            className='max-w-sm text-center lg:text-start space-y-2 justify-center flex flex-col'>
            <p className='text-primary font-bold  text-4xl lg:text-5xl uppercase'>
              What I Do
            </p>
            <h1 className='text-primaryText font-semibold text-xl lg:text-2xl'>
              {aboutMeInfo.info}
            </h1>
            <div className='hidden lg:flex h-[460px]'>
              <Image
                draggable='false'
                src='/IMG_20230228_134910.png'
                alt=''
                className='object-contain opacity-30 brightness-150 contrast-125'
                width={300}
                height={300}
              />
            </div>
          </motion.div>
        </div>
        <div className='flex-1 flex flex-col md:mx-0 gap-10 px-4 sm:px-10 lg:px-14 pb-16 overflow-hidden'>
          {services?.map((service) => (
            <SkillCard
              key={service._id}
              img={urlFor(service.image).url()}
              title={service.title}
              desc={service.info}
            />
          ))}
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div
          className='grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 
        px-4 gap-6 lg:gap-10 lg:px-10 overflow-hidden'>
          {skillBadge?.map((skill) => (
            <SkillBadgeComp
              key={skill._id}
              img={urlFor(skill.badgeImage).url()}
            />
          ))}
        </div>
      </div>
    </>
  );
};
