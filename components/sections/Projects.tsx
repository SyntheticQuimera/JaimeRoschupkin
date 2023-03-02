import React, { useState } from "react";
import { motion } from "framer-motion";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Project } from "../../typings";
import { urlFor } from "../../sanity";
import { Button } from "../Button";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

type Props = {
  project: Project[];
};

export const Projects = ({ project }: Props) => {
  const [active, setActive] = useState(0);

  return (
    <div className='flex flex-col pt-24'>
      <h1 className='lg:text-5xl text-3xl uppercase font-bold lg:px-28 text-center lg:text-start'>
        My Latest{" "}
        <span className='text-4xl lg:text-6xl text-primary'>Works!</span>
      </h1>
      <div className='flex h-screen my-12 items-center justify-center overflow-hidden'>
        <div className='max-w-5xl h-screen sm:max-w-screen-2xl'>
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            onSlideChange={(cur) => setActive(cur.realIndex)}
            loop={true}
            centeredSlides={true}
            speed={800}
            autoplay={{
              delay: 1000,
            }}
            modules={[Autoplay]}>
            {project?.map((Data, i) => (
              <SwiperSlide key={i}>
                {/* Card */}
                <div
                  key={Data._id}
                  className={`card ${active === i && "card-active"}`}>
                  <img
                    src={urlFor(Data.image).url()}
                    alt={Data.title}
                    className='object-cover aspect-video'
                  />
                  <div
                    className={`${
                      active !== i && "hidden"
                    } flex-1 justify-between flex flex-col gap-4 p-6`}>
                    <div className='space-y-4'>
                      <h1 className='text-2xl font-bold'>{Data.title}</h1>
                      <p className='opacity-50 leading-tight lg:leading-normal'>
                        {Data.info}
                      </p>
                    </div>
                    <div className='flex lg:items-center justify-between'>
                      <div className='flex flex-wrap items-center gap-4'>
                        {Data.technologies?.map((tech) => (
                          <Image
                            key={tech._id}
                            width={100}
                            height={100}
                            draggable='false'
                            title={tech.badgeTitle}
                            className='h-5 w-5 lg:h-7 lg:w-7 object-contain'
                            src={urlFor(tech.badgeImage).url()}
                            alt={tech.badgeTitle}
                          />
                        ))}
                      </div>
                      <Link
                        passHref
                        href={Data.demo}
                        target='_blank'
                        rel='noreferrer'>
                        <Button title='Demo' />
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
