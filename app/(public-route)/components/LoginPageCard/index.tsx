import { Typography } from "@mui/material";
import { FC } from "react";
import { LoginPageCardWrapper } from "./style";

declare interface LoginPageCardType {
  children: ChildrenType;
}

const LoginPageCard: FC<LoginPageCardType> = ({ children }) => {
  return (
    <LoginPageCardWrapper>
      <Typography variant="h5" color="primary">
        Welcome to Gaaana App
      </Typography>
      {children}
    </LoginPageCardWrapper>
  );
};

export default LoginPageCard;
