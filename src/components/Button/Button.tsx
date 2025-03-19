import React from "react";
import { button } from "./Button.css.ts";

export interface ButtonProps {
  variant: "primary" | "secondary";
}

export const Button = ({ variant }: ButtonProps) => {
  return <button className={button}>Click me!</button>;
};
