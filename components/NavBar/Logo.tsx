import WebLogoIcon from "@/assets/icons/webIcon.png";
import { Avatar, Typography } from "@mui/material";
import Flex from "../Flex";

const Logo = () => {
  return (
    <Flex justifycontent="center" alignitems="center">
      <Avatar src={WebLogoIcon.src} alt="web icon" />
      <Typography style={{ marginLeft: 10 }} variant="h6">
        Gaaana
      </Typography>
    </Flex>
  );
};

export default Logo;
