import React, { PropsWithChildren, ReactNode } from "react";

const Section = ({
  children,
  padding,
}: {
  children: ReactNode;
  padding?: boolean;
}) => {
  return (
    <div className={`px-4 ${padding ? " container" : ""}`}>{children}</div>
  );
};

export default Section;
