import LoginLogo from "@/assets/images/logo.png";
import { ImageWrapper } from "./style";
import Flex from "@/components/Flex";
import Image from "next/image";

const LoginPageLogo = () => {
  return (
    <Flex justifycontent="center" alignitems="center">
      <ImageWrapper>
        <Image src={LoginLogo} alt="logo" />
      </ImageWrapper>
    </Flex>
  );
};

export default LoginPageLogo;