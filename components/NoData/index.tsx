import NoDataImage from "@/assets/images/nodata.jpg";
import Image from "next/image";
import { ImageWrapper } from "./style";

const NoData = () => {
  return (
    <ImageWrapper>
      <Image src={NoDataImage} alt="no data" />
    </ImageWrapper>
  );
};

export default NoData;
