import TimeLineDisplayStyles from "./TimeLineDisplay.module.scss";
import TimeLine from "../TimeLine/TimeLine";
import { Box } from "@mui/material";

interface ITimeLineData {
  id: number | string;
  title: string;
  imageLink: string;
  content: string;
}
interface ITimeLineDisplay {
  data: ITimeLineData[];
}

const TimeLineDisplay = (props: ITimeLineDisplay) => {
  const { data } = props;
  return (
    <div className={TimeLineDisplayStyles.container}>
      <div className={TimeLineDisplayStyles.followUpButton}>
        <button className={TimeLineDisplayStyles.beginButton}>You can Begin from</button>
      </div>
      <Box className={TimeLineDisplayStyles.timeline}>
        {data &&
          Array.isArray(data) &&
          data.map((each, index) => {
            return (
              <TimeLine
                id={index + 1}
                title={each.title}
                imageLink={each.imageLink}
                content={each.content}
              />
            );
          })}
      </Box>
    </div>
  );
};

export default TimeLineDisplay;
