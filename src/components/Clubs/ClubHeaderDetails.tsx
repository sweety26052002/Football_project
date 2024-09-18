import ClubHeaderDetailsStyles from "./ClubHeaderDetails.module.scss";
import { Box } from "@mui/material";
import { constants } from "../../constants/stringConstants";
import chatwithusimage from "../../assets/chatbotimage.png";
import { useNavigate } from "react-router-dom";
import leftArrow from "../../assets/leftArrow.svg";

interface ILocations {
  name: string;
}
interface IClubHeaderDetails {
  image: string;
  name: string;
  details: any;
  locations: ILocations[];
}
const ClubHeaderDetails = (props: IClubHeaderDetails) => {
  const { image, name, details, locations } = props;
  const navigate = useNavigate();
  return (
    <>
      <Box className={ClubHeaderDetailsStyles.parentContainer}>
        <Box className={ClubHeaderDetailsStyles.buttons}>
          <span onClick={() => navigate(-1)}>
            <img src={leftArrow} alt="" />
            <span> Back</span>
          </span>
          <div className={ClubHeaderDetailsStyles.chatIcon}>
            <div>
              <img src={chatwithusimage} alt="" />
            </div>
            <div>Chat with us</div>
          </div>
        </Box>
        <Box className={ClubHeaderDetailsStyles.container}>
          <Box className={ClubHeaderDetailsStyles.containerImage}>
            <img src={image} />
          </Box>
          <Box className={ClubHeaderDetailsStyles.content}>
            <Box className={ClubHeaderDetailsStyles.contentHeading}>
              <p>{name}</p>
            </Box>
            <Box>
              {details.map((item: any, index: any) => (
                <div
                  key={index}
                  className={ClubHeaderDetailsStyles.contentDetails}
                >
                  <Box className={ClubHeaderDetailsStyles.contentDetailsBox}>
                    <p>{constants.clubpageDetails.location}</p>
                    <p className={ClubHeaderDetailsStyles.subHeading}>
                      {item.location}
                    </p>
                  </Box>
                  <Box className={ClubHeaderDetailsStyles.contentDetailsBox}>
                    <p>{constants.clubpageDetails.clublevel}</p>
                    <p className={ClubHeaderDetailsStyles.subHeading}>
                      {item.clublevel}
                    </p>
                  </Box>
                  <Box className={ClubHeaderDetailsStyles.contentDetailsBox}>
                    <p>{constants.clubpageDetails.category}</p>
                    <p className={ClubHeaderDetailsStyles.subHeading}>
                      {item.category}
                    </p>
                  </Box>
                  <Box className={ClubHeaderDetailsStyles.contentDetailsBox}>
                    <p>{constants.clubpageDetails.primarycontact}</p>
                    <p className={ClubHeaderDetailsStyles.subHeading}>
                      {item.primaryContactName}
                    </p>
                  </Box>
                  <Box className={ClubHeaderDetailsStyles.contentDetailsBox}>
                    <p>{constants.clubpageDetails.email}</p>
                    <p className={ClubHeaderDetailsStyles.subHeading}>
                      {item.email}
                    </p>
                  </Box>
                  <Box className={ClubHeaderDetailsStyles.contentDetailsBox}>
                    <p>{constants.clubpageDetails.contact}</p>
                    <p className={ClubHeaderDetailsStyles.subHeading}>
                      {item.contactNumber}
                    </p>
                  </Box>
                </div>
              ))}
            </Box>
            <Box className={ClubHeaderDetailsStyles.trainingContainer}>
              <p>Our Training Arenas</p>
              <div className={ClubHeaderDetailsStyles.locationData}>
                {locations.map((item) => (
                  <div>
                    <span className={ClubHeaderDetailsStyles.locations}>
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ClubHeaderDetails;
