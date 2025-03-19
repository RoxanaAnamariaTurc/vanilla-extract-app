import { style } from "@vanilla-extract/css";

export const button = style({
  width: "100px",
  height: "50px",
  backgroundColor: "burlywood",
  color: "black",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "brown",
  },
});
