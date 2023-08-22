"use client";
import { Container, Grid } from "@mui/material";
import LoginPageImage from "./components/LoginPageImage";
import LoginPageLogo from "./components/LoginPageLogo";
import { FC } from "react";
import CustomAlert from "@/components/CustomAlert";
interface LoginPageLayoutType {
  children: ChildrenType;
}

const LoginPageLayout: FC<LoginPageLayoutType> = ({ children }) => {


  return (
    <>
      <LoginPageImage />
      <Container style={{ maxWidth: 375, maxHeight: 679, padding: "0px" }}>
        <Grid direction="column" container>
          <Grid style={{ marginTop: 80 }} item xs={12} sm={12} md={6} lg={6}>
            <LoginPageLogo />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            {children}
          </Grid>
        </Grid>
      </Container>
      <CustomAlert />
    </>
  );
};

export default LoginPageLayout;
