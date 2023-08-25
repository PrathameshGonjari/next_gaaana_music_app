"use client";
import Colors from "@/constants/Colors";
import { Button } from "@mui/material";
import styled from "styled-components";

export const CustomButtonStyle = styled(Button)<{
  backgroundcolor: string;
  textcolor: string;
}>`
  &.MuiButton-root {
    background-color: ${(props) => props?.backgroundcolor};
    color: ${(props) => props?.textcolor};
    padding: 12px 20px;
    border-radius: 10px 10px;
    // width: 100%;
    &:hover {
      background-color: ${Colors.scorpio_scarlet_seal};
      color: ${Colors.white};
    }
  }
`;
