import { FC } from "react";

interface LoginPageLayoutType {
  children: ChildrenType;
}

const LoginPageLayout: FC<LoginPageLayoutType> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default LoginPageLayout;
