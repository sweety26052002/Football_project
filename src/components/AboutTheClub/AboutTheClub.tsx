import { Box, Typography } from "@mui/material";
import SectionHeading from "../HeadingField/HeadingField";
import AboutTheClubStyles from "./AboutTheClub.module.scss";
import { aboutTheFounder } from "../../DummyData/founderData";

const AboutTheClub = () => {
  return (
    <>
      <Box className={AboutTheClubStyles.part1}>
        <SectionHeading
          heading={"Club"}
          subHeading={"About the "}
          colors="false"
        />
        <Box className={AboutTheClubStyles.description}>
          <Typography className={AboutTheClubStyles.para}>
            {aboutTheFounder.paragraph1}
          </Typography>
          <Typography className={AboutTheClubStyles.para}>
            {aboutTheFounder.paragraph2}
          </Typography>
          <Typography className={AboutTheClubStyles.para}>
            {aboutTheFounder.paragraph3}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AboutTheClub;
