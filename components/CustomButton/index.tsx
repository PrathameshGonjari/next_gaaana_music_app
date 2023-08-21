"use client";
import { FC, useCallback } from "react";
import { BUTTON_TYPE } from "./helper";
import { CustomButtonStyle } from "./style";
import Colors from "@/constants/Colors";

interface CustomButtonType {
  children: ChildrenType;
  handleClick: () => void;
  type?: string;
  buttonType?: "submit";
  disable?: boolean;
}

const CustomButton: FC<CustomButtonType> = ({
  children,
  handleClick,
  type,
  buttonType,
  disable,
}) => {
  const getBackgroundColor = useCallback(() => {
    if (type === BUTTON_TYPE.PRIMARY) {
      return Colors.terra_cotta;
    }
    if (type === BUTTON_TYPE.SECONDARY) {
      return Colors.bride_made;
    }
    return Colors.terra_cotta;
  }, [type]);

  const getTextColor = useCallback(() => {
    if (type === BUTTON_TYPE.PRIMARY) {
      return Colors.white;
    }
    if (type === BUTTON_TYPE.SECONDARY) {
      return Colors.black;
    }
    return Colors.white;
  }, [type]);

  return (
    <CustomButtonStyle
      backgroundcolor={getBackgroundColor()}
      textcolor={getTextColor()}
      onClick={handleClick}
      type={buttonType}
      disabled={disable}
    >
      {children}
    </CustomButtonStyle>
  );
};

export default CustomButton;
