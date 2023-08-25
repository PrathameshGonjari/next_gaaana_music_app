"use client";
import { Box } from "@mui/material";
import styled from "styled-components";

export const MusicCardWrapper = styled.div`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  min-width: 70%;
`;

export const SkeletonWrapper = styled(Box)`
  display: flex;
  align-items: center;
`;
