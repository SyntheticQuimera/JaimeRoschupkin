import React from "react";

type Props = {
  title: string;
  height?: number;
};

export const Button = ({ title, height = 40 }: Props) => {
  return (
    <button
      className={`bg-gradient-to-r from-gradientFrom to-gradientTo text-primaryText tracking-wider font-semibold px-6 rounded-full transition ease-in-out delay-150 
      hover:shadow-[rgba(103,_58,_183,_0.8)_0px_2px_20px] duration-300`}
      style={{ height }}>
      <p>{title}</p>
    </button>
  );
};
