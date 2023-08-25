import LoginLogo from "@/assets/images/logo.png";
import { ImageWrapper } from "./style";
import Image from "next/image";

const LoginPageLogo = () => {
  return (
    <ImageWrapper>
      <Image src={LoginLogo} alt="logo" />
    </ImageWrapper>
  );
};

export default LoginPageLogo;
