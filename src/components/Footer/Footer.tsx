import { Box, Stack, Typography } from "@mui/material";
import FooterStyles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { constants } from "../../constants/stringConstants";

const Footer = () => {
  return (
    <Box className={FooterStyles.container}>
      <Stack className={FooterStyles.newsletter}>
        <Typography component="p" className={FooterStyles.heading} id={FooterStyles.status}>
          {constants.footer.newsletter.heading}
        </Typography>
        <Link to="/newsletter" className={FooterStyles.subHeading}>
          {constants.footer.newsletter.link}
        </Link>
      </Stack>
      <Stack
        className={`${FooterStyles.newsletter} ${FooterStyles.socialMedia}`}
      >
        <Typography component="p" className={FooterStyles.heading} id={FooterStyles.headerNone}>
          {constants.footer.socialMedia.heading}
        </Typography>
        <Typography component="p" className={FooterStyles.headingFor}>
          {constants.footer.socialMedia.headingfor1366}
        </Typography>
        {constants.footer.socialMedia.types.map((each, index) => {
          return (
            <Link
              to={each.link}
              className={FooterStyles.subHeading}
              key={index}
            >
              <img src={each.icon} alt={each.name} />
            </Link>
          );
        })}
      </Stack>
      <Typography component="p" className={FooterStyles.allRights}>
        {constants.footer.allRights}
      </Typography>
      <Stack className={FooterStyles.emailContainer}>
        <img src={constants.footer.emailData.icon} alt="email" />
        <Typography component="p" className={FooterStyles.email}>
          {constants.footer.emailData.email}
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
