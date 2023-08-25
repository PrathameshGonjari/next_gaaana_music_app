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
import { isShowToast } from "@/redux/features/toast-slice";
import { useDispatch } from "react-redux";
import LoginPageCard from "../components/LoginPageCard";
declare interface UserType {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const handleSubmit = async (values: UserType) => {
    try {
      const res = await fetch("/api/auth/users", {
        method: "POST",
        body: JSON.stringify(values),
      });

      const errorToast = {
        isViewToast: true,
        message: res?.statusText,
        type: "error",
      } as ToastState;

      if (res.status !== 200) {
        dispatch(isShowToast(errorToast));
        return;
      }

      const successToast = {
        isViewToast: true,
        message: "Login Successful",
        type: "success",
      } as ToastState;

      dispatch(isShowToast(successToast));
      return router.replace("/sign-in");
    } catch (error) {
      const errorToast = {
        isViewToast: true,
        message: "Some thing went wrong",
        type: "error",
      } as ToastState;
      dispatch(isShowToast(errorToast));
    }
  };

  return (
    <LoginPageCard>
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
    </LoginPageCard>
  );
};

export default SignUp;
