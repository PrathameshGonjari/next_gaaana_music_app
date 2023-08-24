"use client";
import Colors from "@/constants/Colors";
import styled from "styled-components";

export const LoginPageCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  max-width: 350px;
  border-radius: 12px;
  background: ${Colors.white};
  padding: 58px 0px;
`;

export const LoginButtonWrapper = styled.div`
  margin-top: 20px;
  button {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
  margin: 10px;
  max-width: 195px;
`;
