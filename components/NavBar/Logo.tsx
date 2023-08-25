import WebLogoIcon from "@/assets/icons/webIcon.png";
import { Avatar, Typography } from "@mui/material";
import { LogoWrapper } from "./style";

const Logo = () => {
  return (
    <LogoWrapper>
      <Avatar src={WebLogoIcon.src} alt="web icon" />
      <Typography style={{ marginLeft: 10 }} variant="h6">
        Gaaana
      </Typography>
    </LogoWrapper>
  );
};

export default Logo;
