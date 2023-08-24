import NoDataImage from "@/assets/images/nodata.jpg";
import Image from "next/image";
import Flex from "../Flex";
import { ImageWrapper } from "./style";

const NoData = () => {
  return (
    <Flex
      style={{ height: "80vh" }}
      justifycontent="center"
      alignitems="center"
    >
      <ImageWrapper>
        <Image src={NoDataImage} alt="no data" />
      </ImageWrapper>
    </Flex>
  );
};

export default NoData;
