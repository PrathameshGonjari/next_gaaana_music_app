import NavigationBar from "@/components/NavBar";
import { FC } from "react";

interface LoginPageLayoutType {
  children: ChildrenType;
}

const LoginPageLayout: FC<LoginPageLayoutType> = ({ children }) => {
  return (
    <>
      <NavigationBar/>
      {children}
    </>
  );
};

export default LoginPageLayout;
