"use client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { BackButtonWrapper } from "./style";
import { Typography } from "@mui/material";

interface HeaderBackButtonType {
  title: string;
}

const HeaderBackButton: FC<HeaderBackButtonType> = ({ title }) => {
  const router = useRouter();
  return (
    <BackButtonWrapper onClick={() => router.replace("/")}>
      <ArrowBackIcon />
      <Typography variant="h2">{title}</Typography>
    </BackButtonWrapper>
  );
};

export default HeaderBackButton;
