import React from "react";
import { MessageForm } from "../MessageForm";

export const ContactMe = () => {
  return (
    <div className='flex flex-col lg:flex-row relative h-screen pt-24 lg:pt-12 gap-8 lg:gap-0 px-4 lg:px-16'>
      <div className='flex flex-1 items-center justify-center'>
        <div className='max-w-sm text-center lg:-mt-20 lg:text-start space-y-2 justify-center flex flex-col'>
          <p className='text-primary font-semibold text-4xl'>GET IN TOUCH</p>
          <h1 className='text-primaryText font-bold text-7xl'>
            Let&apos;s work together!
          </h1>
        </div>
      </div>
      <MessageForm name='' subject='' email='' message='' phone={0} />
    </div>
  );
};
