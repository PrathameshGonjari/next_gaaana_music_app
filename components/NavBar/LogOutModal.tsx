import { Typography } from "@mui/material";
import { FC } from "react";
import CustomModal from "../Modal";
import { ModalStyle } from "./style";
import Flex from "../Flex";
import CustomButton from "../CustomButton";
import { BUTTON_TYPE } from "../CustomButton/helper";

interface LogOutModalType {
  visible: boolean;
  handleCloseModal: () => void;
  handleLogout: () => void;
}

const LogOutModal: FC<LogOutModalType> = ({
  visible,
  handleCloseModal,
  handleLogout,
}) => {
  return (
    <CustomModal visible={visible} handleCloseModal={handleCloseModal}>
      <ModalStyle>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Are you sure you want log out from Gaaana App?
        </Typography>
        <Flex style={{ margin: 20 }} justifycontent="space-around">
          <CustomButton handleClick={handleLogout}>Log Out</CustomButton>
          <CustomButton
            type={BUTTON_TYPE.SECONDARY}
            handleClick={handleCloseModal}
          >
            Cancel
          </CustomButton>
        </Flex>
      </ModalStyle>
    </CustomModal>
  );
};

export default LogOutModal;
