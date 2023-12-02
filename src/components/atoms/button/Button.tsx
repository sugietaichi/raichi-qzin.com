"use client";

import { type MouseEventHandler } from "react";

interface Props {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  optional?: string;
}

const Button = ({
  onClick = () => alert("clicked"),
  optional = undefined,
  children = 'button',
}: Props): JSX.Element => {
  const colors = `border-black text-black`;
  const transforms = `transform transition-transform duration-200 hover:scale-95`;
  const bases = `text-center border rounded m-2 py-2 px-4`;
  const shadow = `shadow-md hover:shadow-lg`;

  const classes = [bases, transforms, colors, shadow, optional]
  const className = classes.filter(Boolean).join(' ')

  return (
    <button
      className={className}
      onClick={onClick}
      type='button'
    >
      {children}
    </button>
  );
};


export default Button;
