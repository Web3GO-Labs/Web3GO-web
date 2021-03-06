import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "36px",
    padding: "0 12px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "#000",
    color: "primary",
  },
  [variants.SECONDARY]: {
    backgroundColor: "secondary",
    color: "primary",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "transparent",
    boxShadow: "none",
    color: "#000",
    border: "1px solid",
    borderColor: "#000",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "backgroundAlt",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "btnTextColor",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "btnTextColor",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primary",
  },
};
