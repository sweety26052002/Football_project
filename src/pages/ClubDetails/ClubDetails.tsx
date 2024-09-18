import { clubDetailsData, locationData } from "../../DummyData/clubdetailsdata";
import { visionData } from "../../DummyData/founderData";
import AboutTheClub from "../../components/AboutTheClub/AboutTheClub";
import ClubpageFounder from "../../components/ClubpageFounder/ClubpageFounder";
import ClubHeaderDetails from "../../components/Clubs/ClubHeaderDetails";
import { Box, Stack } from "@mui/material";
import ClubDetailsStyles from "./ClubDetails.module.scss";
import ClubReview from "../../components/ClubReview/ClubReview";
import founder from "../../assets/Screenshot 2024-02-23 at 19.24 1.png";
import petraClub from "../../assets/Screenshot 2024-02-22 at 22.11 1.png";
import Carousel from "../../components/Carousel/Carousel";
import SideNav from "../../components/SideNavBar/SideNav";
import { sidebarData } from "../../DummyData/sidebarForTournamentPage";
import { carouselData, secondCarouselData } from "../../DummyData/carouselData";
const ClubDetails = () => {
  return (
    <Box className={ClubDetailsStyles.container}>
      <ClubHeaderDetails
        image={petraClub}
        name={"Durand Cup Club"}
        details={clubDetailsData}
        locations={locationData}
      />
      
      <Stack className={ClubDetailsStyles.AboutClubContainer}>
      <Box id="About the Club">
        <AboutTheClub />
        <Box className={ClubDetailsStyles.sideBar}>
        <SideNav content={sidebarData} scrollValue={140}/>
        </Box>
        </Box>
        <Box id="Founders">
        <ClubpageFounder
          heading="Vision"
          subheading="Founder's"
          description={visionData}
          image={founder}
        />
         </Box>
      </Stack>
     
     
      <Box id='Our Hall of Expertise'>
      <Carousel
        noOfSlides={5}
        data={carouselData}
        secondCarouselData={secondCarouselData}
        variant="primary"
      />
      <Carousel
        noOfSlides={4}
        data={carouselData}
        secondCarouselData={secondCarouselData}
        variant="secondary"
      />
      </Box>
      <Box id='Our Moments'>
      <ClubReview />
      </Box>
    </Box>
  );
};

export default ClubDetails;
