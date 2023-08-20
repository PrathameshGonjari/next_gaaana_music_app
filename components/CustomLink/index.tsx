import React from "react";
import { CustomLink } from "./style";

interface CustomLinkType {
  children: string;
  navigateUrl: string;
}

const Link = ({ children, navigateUrl }: CustomLinkType) => {
  return <CustomLink href={navigateUrl}>{children}</CustomLink>;
};

export default Link;
