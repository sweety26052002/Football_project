import { Box, Typography } from "@mui/material";
import CardWthDetailsStyles from "./CardWithDetails.module.scss";
import { useNavigate } from "react-router-dom";

export interface ICard {
  id: number;
  academyIcon: string;
  certification: string;
  clubImage: string;
  star: string;
  years: string;
  title: string;
  description: string;
  locationIcon: string;
  location: string;
  group: string;
  tierIcon: string;
  tier: string;
  tierFlag: boolean;
  groupIcon?: string;
}
interface ICardWithDetails {
  card: ICard;
  tournament?: boolean;
}

const CardWithDetails = ({ card, tournament }: ICardWithDetails) => {
  const navigate = useNavigate();
  const {
    id,
    academyIcon,
    certification,
    clubImage,
    star,
    years,
    title,
    description,
    locationIcon,
    location,
    groupIcon,
    group,
    tierIcon,
    tier,
    tierFlag,
  } = card;

  return (
    <Box
      className={CardWthDetailsStyles.card}
      onClick={() =>
        tournament
          ? navigate(`/tournament-details/${id}`)
          : navigate(`/club-details/${id}`)
      }
    >
      <Box className={CardWthDetailsStyles.part1}>
        <Box className={CardWthDetailsStyles.academyTag}>
          <Box className={CardWthDetailsStyles.academyIcon}>
            <img src={academyIcon} />
          </Box>
          <Box>
            <Typography className={CardWthDetailsStyles.certification}>
              {certification}
            </Typography>
          </Box>
        </Box>
        <Box className={CardWthDetailsStyles.clubImage}>
          <img src={clubImage} alt={clubImage} />
        </Box>
        <Box className={CardWthDetailsStyles.yearsTag}>
          <Box className={CardWthDetailsStyles.star}>
            <img src={star} alt={star} />
          </Box>
          <Box>
            <Typography className={CardWthDetailsStyles.years}>
              {years}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className={CardWthDetailsStyles.part2}>
        <Box>
          <Typography className={CardWthDetailsStyles.cardTitle}>
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography className={CardWthDetailsStyles.cardDescription}>
            {description}
          </Typography>
        </Box>
        <Box className={CardWthDetailsStyles.address}>
          <Box className={CardWthDetailsStyles.eachAddress}>
            <Box>
              <img src={locationIcon} />
            </Box>
            <Typography className={CardWthDetailsStyles.eachAddressTexts}>
              {location}
            </Typography>
          </Box>
          <Box className={CardWthDetailsStyles.eachAddress}>
            <Box>
              <img src={groupIcon} alt={groupIcon} />
            </Box>
            <Typography className={CardWthDetailsStyles.eachAddressTexts}>
              {group}
            </Typography>
          </Box>
          {tierFlag && (
            <Box className={CardWthDetailsStyles.eachAddress}>
              <Box>
                <img src={tierIcon} alt={tierIcon} />
              </Box>
              <Typography className={CardWthDetailsStyles.eachAddressTexts}>
                {tier}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default CardWithDetails;
