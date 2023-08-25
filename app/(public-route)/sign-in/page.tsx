"use client";
import CustomButton from "@/components/CustomButton";
import Link from "@/components/CustomLink";
import InputField from "@/components/InputField";
import { isShowToast } from "@/redux/features/toast-slice";
import { Formik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import LoginPageCard from "../components/LoginPageCard";
import {
  InputWrapper,
  LoginButtonWrapper,
} from "../components/LoginPageCard/style";
import { LinkWrapper } from "../style";
import { initialState, signInValitaion } from "./helper";

declare interface UserType {
  email: string;
  password: string;
}

const SignIn = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const handleSubmit = async (values: UserType) => {
    try {
      const res = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      const errorToast = {
        isViewToast: true,
        message: res?.error || "",
        type: "error",
      } as ToastState;

      if (res?.error) {
        dispatch(isShowToast(errorToast));
        return;
      }
      const successToast = {
        isViewToast: true,
        message: "Login Successful",
        type: "success",
      } as ToastState;

      dispatch(isShowToast(successToast));
      router.replace("/");
    } catch (error) {
      //errors
      // console.log("error", error);
    }
  };

  return (
    <LoginPageCard>
      <Formik
        initialValues={initialState}
        onSubmit={handleSubmit}
        validationSchema={signInValitaion}
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
                  value={values?.password}
                  handleChange={handleChange}
                  onBlur={handleBlur}
                  error={!!(errors.password && touched.password)}
                  errorText={errors.password}
                  type="password"
                />
              </InputWrapper>
              <LoginButtonWrapper>
                <CustomButton disable={isSubmitting} handleClick={handleSubmit}>
                  Login
                </CustomButton>
              </LoginButtonWrapper>
              <LinkWrapper>
                <Link navigateUrl={"/sign-up"}>New Account</Link>
              </LinkWrapper>
            </form>
          );
        }}
      </Formik>
    </LoginPageCard>
  );
};

export default SignIn;
