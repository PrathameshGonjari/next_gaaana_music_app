"use client";
import Flex from "@/components/Flex";
import { Typography } from "@mui/material";
import { FC } from "react";
import {
  LoginPageCardWrapper
} from "./style";

declare interface LoginPageCardType {
  children: ChildrenType
}

const LoginPageCard:FC<LoginPageCardType> = ({ children }) => {

  return (
    <Flex justifycontent="center" alignitems="center">
      <LoginPageCardWrapper>
        <Typography variant="h5" color="primary">
          Welcome to Gaaana App
        </Typography>
        {children}
      </LoginPageCardWrapper>
    </Flex>
  );
};

export default LoginPageCard;
