import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "./Button";

type Inputs = {
  name: string;
  subject: string;
  email: string;
  phone: number;
  message: string;
};

export const MessageForm = (props: Inputs) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:syntheticQuimera@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (Phone number: ${formData.phone})`;
  };

  return (
    <div className='flex items-center justify-center flex-1'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col space-y-4 pb-6 lg:pb-0 w-full px-2 lg:px-0 lg:w-[80%] text-white'>
        <input
          {...register("name")}
          placeholder='Name'
          className='contactInput'
          type='text'
        />
        <div className='flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 space-y-4'>
          <input
            {...register("email")}
            placeholder='Email Address'
            className='contactInput'
            type='email'
          />
          <input
            {...register("phone")}
            placeholder='Phone No.'
            className='contactInput'
            type='tel'
          />
        </div>
        <input
          {...register("subject")}
          placeholder='Subject'
          className='contactInput'
          type='text'
        />
        <textarea
          {...register("message")}
          rows={6}
          placeholder='Message'
          className='contactInput'
        />
        <Button title='Send message' height={56} />
      </form>
    </div>
  );
};
