"use client";
import React from "react";
import {
  InputWrapper,
  LoginButtonWrapper,
} from "../components/LoginPageCard/style";
import InputField from "@/components/InputField";
import { initialState, signUpValitaion } from "./helper";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/navigation";
import { Typography } from "@mui/material";
import { LinkWrapper } from "../style";
import Link from "@/components/CustomLink";
import { Formik } from "formik";
declare interface UserType {
  name: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const router = useRouter();

  const handleSubmit = async (values: UserType) => {
    try {
      const res = await fetch("/api/auth/users", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (res) return router.replace("/sign-in");
    } catch (error) {
      // console.log("error", error);
    }
  };

  return (
    <Formik
      initialValues={initialState}
      onSubmit={handleSubmit}
      validationSchema={signUpValitaion}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <form>
            <InputWrapper>
              <InputField
                id="name"
                label="Name"
                handleChange={handleChange}
                onBlur={handleBlur}
                value={values?.name}
                error={!!(errors.name && touched.name)}
                errorText={errors.name}
              />
            </InputWrapper>
            <InputWrapper>
              <InputField
                id="email"
                label="Email"
                handleChange={handleChange}
                onBlur={handleBlur}
                value={values?.email}
                error={!!(errors.email && touched.email)}
                errorText={errors.email}
                type="email"
              />
            </InputWrapper>
            <InputWrapper>
              <InputField
                id="password"
                label="Password"
                handleChange={handleChange}
                onBlur={handleBlur}
                value={values?.password}
                error={!!(errors.password && touched.password)}
                errorText={errors.password}
                type="password"
              />
            </InputWrapper>
            <LoginButtonWrapper>
              <CustomButton disable={isSubmitting} handleClick={handleSubmit}>
                Register Now
              </CustomButton>
            </LoginButtonWrapper>
            <LinkWrapper>
              <Typography>Already a member?</Typography>
              <Link navigateUrl={"/"}>Login</Link>
            </LinkWrapper>
          </form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
