import { Skeleton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { MusicCardWrapper, Wrapper } from "../MusicCard/style";
import Flex from "../Flex";
import { SkeletonWrapper } from "./style";

const LoadingMusicCard = () => {
  const SkeletonWidth = ["100", "80", "60", "40"];

  return (
    <Wrapper>
      <Card>
        <Flex>
          <MusicCardWrapper>
            <CardContent sx={{ flex: "1 0 auto" }}>
              {SkeletonWidth?.map((width: string) => (
                <Skeleton key={width} variant="text" width={`${width}%`} />
              ))}
            </CardContent>
            <SkeletonWrapper sx={{ pl: 1, pb: 1 }}>
              <Skeleton variant="circular" width={38} height={38} />
            </SkeletonWrapper>
          </MusicCardWrapper>
          <Skeleton variant="rectangular" width={180} height={180} />
        </Flex>
      </Card>
    </Wrapper>
  );
};

export default LoadingMusicCard;
