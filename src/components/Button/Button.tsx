import React from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
}

export const Button = ({ variant }: ButtonProps) => {
  return <button>Click me!</button>;
};
