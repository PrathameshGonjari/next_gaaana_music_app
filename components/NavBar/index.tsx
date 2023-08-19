"use client";
import { AppBar, Box, CssBaseline } from "@mui/material";
import { useState } from "react";
import LogOutModal from "./LogOutModal";
import Settings from "./Settings";
import { AppToolBar } from "./style";
import Logo from "./Logo";
import { signOut } from "next-auth/react";

const settings = ["Logout"];

const NavigationBar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCloseUserMenu = (event: any) => {
    if (event?.target?.innerHTML === settings[0]) {
      setIsVisible(true);
    }
    setAnchorElUser(null);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  const handleLogout = () => {
    signOut();
    handleCloseModal();
  };

  return (
    <>
      <Box>
        <CssBaseline />
        <AppBar component="nav">
          <AppToolBar>
            <Logo />
            <Settings
              picture={""}
              handleOpenUserMenu={handleOpenUserMenu}
              anchorElUser={anchorElUser}
              handleCloseUserMenu={handleCloseUserMenu}
              settings={settings}
            />
          </AppToolBar>
        </AppBar>
      </Box>
      <LogOutModal
        visible={isVisible}
        handleCloseModal={handleCloseModal}
        handleLogout={handleLogout}
      />
    </>
  );
};

export default NavigationBar;
