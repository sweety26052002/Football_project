import { Box } from "@mui/material";
import VideoSectionStyles from "./VideoSection.module.scss";
import game from "../../assets/India 2026 FIFA World Cup (1).mp4";
import { constants } from "../../constants/stringConstants";

const VideoSection = () => {
  return (
    <Box className={VideoSectionStyles.container}>
      <Box className={VideoSectionStyles.homeImage}>
        <video autoPlay muted loop>
          <source src={game} type="video/mp4" />
        </video>
      </Box>
      <Box className={VideoSectionStyles.homeImage__textright}>
        <p>{constants.videoMedia.rightText}</p>
      </Box>
      <Box className={VideoSectionStyles.homeImage__textleft}>
        <p>{constants.videoMedia.leftText}</p>
      </Box>
    </Box>
  );
};

export default VideoSection;
