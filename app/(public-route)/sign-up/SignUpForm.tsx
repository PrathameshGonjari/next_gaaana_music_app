"use client"
import React, { useState } from "react";
import {
  InputWrapper,
  LoginButtonWrapper,
} from "../components/LoginPageCard/style";
import InputField from "@/components/InputField";
import { initialState } from "./helper";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "next/navigation";
declare interface UserType {
  name: string;
  email: string;
  password: string;
}

const SignUpForm = () => {
  const [user, setUser] = useState<UserType>(initialState);

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
      const res = await fetch("/api/auth/users", {
        method: "POST",
        body: JSON.stringify(user),
      });
      router.replace("/sign-in");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <form>
      <InputWrapper>
        <InputField
          id="name"
          label="Name"
          handleChange={handleInputChange}
          value={user?.name}
        />
      </InputWrapper>
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

export default SignUpForm;
