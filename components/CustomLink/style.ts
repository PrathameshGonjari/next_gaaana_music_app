import Colors from "@/constants/Colors";
import Link from "next/link";
import styled from "styled-components";

export const CustomLink = styled(Link)`
  &:link {
    text-decoration: none;
    color: ${Colors.scorpio_scarlet_seal};
  }

  &:visited {
    text-decoration: none;
    color: ${Colors.scorpio_scarlet_seal};
  }

  &:hover {
    text-decoration: none;
    color: ${Colors.scorpio_scarlet_seal};
  }

  &:active {
    text-decoration: none;
    color: ${Colors.scorpio_scarlet_seal};
  }
`;
