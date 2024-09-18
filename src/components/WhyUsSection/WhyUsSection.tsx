import { Box, Typography } from "@mui/material";
import RegistrationBox from "../RegistrationBox/RegistrationBox";
import WhyUsSectionStyles from "./WhyUsSection.module.scss";
import SectionHeading from "../HeadingField/HeadingField";
import PopularIndianClubsSection from "../PopularIndianClubsSection/PopularIndianClubsSection";
import { soccerScoutData } from "../../DummyData/soccerScoutData";

const WhyUsSection = () => {
  return (
    <Box className={WhyUsSectionStyles.soccerSection}>
      <Box className={WhyUsSectionStyles.part1}>
        <SectionHeading
          heading={"SOCCER SCOUT"}
          subHeading={"WHY"}
          colors={"false"}
        />
        <Box className={WhyUsSectionStyles.description}>
          <Typography className={WhyUsSectionStyles.para}>
            {soccerScoutData.paragraph1}
          </Typography>
          <Typography className={WhyUsSectionStyles.para}>
            {soccerScoutData.paragraph2}
          </Typography>
          <Typography className={WhyUsSectionStyles.para}>
            {soccerScoutData.paragraph3}
          </Typography>
          <Typography className={WhyUsSectionStyles.para}>
            {soccerScoutData.paragraph4}
          </Typography>
        </Box>
      </Box>
      <Box className={WhyUsSectionStyles.part2}>
        <PopularIndianClubsSection />
      </Box>
      <Box className={WhyUsSectionStyles.part3}>
        <RegistrationBox
          heading={"Register YOUR CLUB HERE"}
          subHeading={"shape tomorrow's soccer stars"}
        />
      </Box>
    </Box>
  );
};
export default WhyUsSection;
