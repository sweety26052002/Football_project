import HeadingField from "../HeadingField/HeadingField";
import { Box } from "@mui/material";
import styles from "./ClubpageFounder.module.scss";
interface IVisionData {
  id: number | string;
  description: string;
}
interface IFounderData {
  heading: string;
  subheading: string;
  image: string;
  description: IVisionData[];
}
const ClubpageFounder = (props: IFounderData) => {
  const { heading, image, description, subheading } = props;
  return (
    <>
      <Box className={styles.container}>
        <HeadingField
          heading={heading}
          subHeading={subheading}
          colors="false"
        />
        <Box className={styles.content}>
          <Box className={styles.contentImage}>
            <img src={image} alt="Founder" />
          </Box>
          <Box className={styles.contentDescription}>
            {description &&
              Array.isArray(description) &&
              description.length > 0 &&
              description.map((item) => (
                <p key={item.id}>{item.description}</p>
              ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default ClubpageFounder;
