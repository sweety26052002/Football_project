import React from "react";
import { Box } from "@mui/material";
import DisplayCardStyles from "./DisplayCard.module.scss";
interface IcardProps {
  cardArray: any;
  variant: string;
}

const DisplayCard: React.FC<IcardProps> = ({ cardArray, variant }) => {
  return (
    <>
      <Box className={DisplayCardStyles.TotalCard}>
        {cardArray &&
          Array.isArray(cardArray) &&
          cardArray.length > 0 &&
          cardArray.map((e: any) => (
            <Box
              className={
                variant === "primary"
                  ? DisplayCardStyles.cardPrimary
                  : variant === "secondary"
                  ? DisplayCardStyles.cardSecondary
                  : DisplayCardStyles.cardStyle
              }
            >
              <Box
                className={
                  variant === "primary"
                    ? DisplayCardStyles.primaryImage
                    : variant === "secondary"
                    ? DisplayCardStyles.secondaryImage
                    : DisplayCardStyles.image
                }
              >
                <img className={DisplayCardStyles.imageStyles} src={e.image} />
              </Box>
              <Box
                className={`${DisplayCardStyles.cardDetails}
              
              ${
                variant === "teritiary" ? DisplayCardStyles.teritiaryText : ""
              }`}
              >
                <Box className={DisplayCardStyles.heading}>{e.title}</Box>
                <Box className={DisplayCardStyles.description}>
                  {e.description}
                </Box>
              </Box>
            </Box>
          ))}
      </Box>
    </>
  );
};
export default DisplayCard;
