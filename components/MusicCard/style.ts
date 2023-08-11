"use client"
import styled from "styled-components";

export const Wrapper = styled.div`
  img {
    width: 180px;
    height: 180px;
    object-fit: contain;
  }
  #parent .hidden-child{
    visibility: hidden;
  }

  #parent:hover .hidden-child{
    visibility: visible;
  }
  #parent:hover {
    opacity: 0.5;
  }
`;

export const MusicCardWrapper = styled.div`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  min-width: 70%;
`;