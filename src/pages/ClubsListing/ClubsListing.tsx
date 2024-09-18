import { Box, Stack } from "@mui/material";
import CardWithDetails, {
  ICard,
} from "../../components/CardWithDetails/CardWithDetails";
import ClubsListingStyles from "./ClubsListing.module.scss";
import clubListingImage from "../../assets/playes1.jpg";
import { detailedCardList } from "../../DummyData/cardWithDetails";
import SectionHeading from "../../components/HeadingField/HeadingField";

const ClubsListing = () => {
  return (
    <Box className={ClubsListingStyles.clubsList}>
      <Box className={ClubsListingStyles.clubsListImage}>
        <img src={clubListingImage} alt="" />
      </Box>
      <Stack className={ClubsListingStyles.clubsListContainer}>
        <Box className={ClubsListingStyles.heading}>
          <SectionHeading
            colors="false"
            heading={"YOUR AREA"}
            subHeading={"EXPLORE FOOTBALL OPPURTUNITIES IN "}
          />
        </Box>
        <Box>
          <Box className={ClubsListingStyles.cardsContainer}>
            {detailedCardList &&
              Array.isArray(detailedCardList) &&
              detailedCardList.length > 0 &&
              detailedCardList.map((card: ICard) => (
                <CardWithDetails card={card} />
              ))}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};
export default ClubsListing;
