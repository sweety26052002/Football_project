import { Box, Typography } from "@mui/material";
import TimeLineStyles from "./TimeLine.module.scss";
interface ITimeLine {
  title: string;
  content: string;
  imageLink: string;
  id: number;
}
const TimeLine = (props: ITimeLine) => {
  const { title, content, imageLink, id } = props;
  return (
    <Box
      className={
        id % 2 === 0
          ? TimeLineStyles.evencontainer
          : TimeLineStyles.oddContainer
      }
    >
      <Box className={TimeLineStyles.content}>
        <Typography className={TimeLineStyles.title}>
          {title}
        </Typography>
        <Typography className={TimeLineStyles.description}>
          {content}
        </Typography>
      </Box>
      <Box className={TimeLineStyles.image}>
        <img src={imageLink} alt="" />
      </Box>
    </Box>
  );
};

export default TimeLine;
