"use client";
import React, { useState } from "react";
import {
  InputWrapper,
  LoginButtonWrapper,
} from "../components/LoginPageCard/style";
import InputField from "@/components/InputField";
import { initialState } from "./helper";
import CustomButton from "@/components/CustomButton";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

declare interface UserType {
  email: string;
  password: string;
}

const SignInForm = () => {
  const [user, setUser] = useState<UserType>(initialState);
  const { email, password } = user;
  const router = useRouter();
  const handleInputChange = (e: ChangeEventType) => {
    setUser((pre) => {
      return {
        ...pre,
        [e?.target?.id]: e?.target?.value,
      };
    });
  };

  const handleSubmit = async () => {
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) return console.log(res.error);
      router.replace("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <form>
      <InputWrapper>
        <InputField
          id="email"
          label="Email"
          handleChange={handleInputChange}
          value={user?.email}
          type="email"
        />
      </InputWrapper>
      <InputWrapper>
        <InputField
          id="password"
          label="Password"
          value={user?.password}
          handleChange={handleInputChange}
          type="password"
        />
      </InputWrapper>
      <LoginButtonWrapper>
        <CustomButton handleClick={handleSubmit}>Login</CustomButton>
      </LoginButtonWrapper>
    </form>
  );
};

export default SignInForm;
