import { Box, Typography } from "@mui/material";
import PopularIndianClubsSectionStyles from "./PopularIndianClubsSection.module.scss";
import SectionHeading from "../HeadingField/HeadingField";
import DisplayCard from "../Card/DisplayCard";
import { card } from "../../DummyData/cardData";

const PopularIndianClubsSection = () => {
  return (
    <Box className={PopularIndianClubsSectionStyles.clubFields}>
      <Box className={PopularIndianClubsSectionStyles.clubFields__heading}>
        <SectionHeading
          heading="CLUBS"
          subHeading="POPULAR INDIAN"
          colors="false"
        />
        <Typography
          className={
            PopularIndianClubsSectionStyles.clubFields__heading__viewmore
          }
        >
          View Club Details
        </Typography>
      </Box>
      <Box className={PopularIndianClubsSectionStyles.clubFields__cards}>
        <DisplayCard cardArray={card.secondary} variant={"primary"} />
      </Box>
    </Box>
  );
};
export default PopularIndianClubsSection;
