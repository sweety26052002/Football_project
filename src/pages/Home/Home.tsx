import { Box, Typography } from "@mui/material";
import SectionHeading from "../../components/HeadingField/HeadingField";
import TimeLineDisplay from "../../components/TimeLineDisplay/TimeLineDisplay";
import TournamentSection from "../../components/TournamentSection/TournamentSection";
import VideoSection from "../../components/VideoSection/VideoSection";
import WhyUsSection from "../../components/WhyUsSection/WhyUsSection";
import HomeStyles from "./Home.module.scss";
import { timeLineData, timeLineDataEven } from "../../DummyData/timeLineData";


const Home = () => {
  return (
    <>
      <VideoSection />
      <WhyUsSection />
      <TournamentSection />
      <Box className={HomeStyles.nationalTeamDynamicsContainer}>
        <SectionHeading
          heading="Career in Soccer"
          subHeading="ARE YOU lOOKING A"
          colors="false"
        />
        <Typography component={"p"} className={HomeStyles.heading}>
          National Team Dynamics
        </Typography>
        <TimeLineDisplay data={timeLineDataEven} />
      </Box>
      <hr />
      <Box className={HomeStyles.nationalTeamDynamicsContainer}>
        <Typography component={"p"} className={HomeStyles.heading}>
          Clubs & Leagues Ecosystem
        </Typography>
        <TimeLineDisplay data={timeLineData} />
      </Box>
    </>
  );
};

export default Home;
