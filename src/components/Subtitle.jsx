import React from "react";

const Subtitle = ({
  children,
  size = "text-lg",
  fontWeight = "font-semibold",
  textColor = "text-black",
}) => {
  return <h1 className={` ${size} ${fontWeight} ${textColor} `}>{children}</h1>;
};

export default Subtitle;
