import { Box, Typography } from "@mui/material";
import bottomArrow from "../../assets/ArrowBendDownRight (2).svg";
import arrow from "../../assets/ArrowBendDownRight.svg";
import upArrow from "../../assets/ArrowBendDownRight (1).svg";

import TournamentDetailsKeyHighlightsStyles from "./TournamentDetailsKeyHighlights.module.scss";
import SectionHeading from "../HeadingField/HeadingField";
const TournamentDetailsKeyHighlights = (props: any) => {
  const { data } = props;
  let topContainer: Array<Object> = [];
  let bottomContainer: Array<Object> = [];
  if (data && Array.isArray(data) && data.length != 0) {
    topContainer = data.slice(0, 3);
    bottomContainer = data.slice(3, data.length);
  }
  return (
    <>
      <Box
        className={
          TournamentDetailsKeyHighlightsStyles.tournamentHighlightsHeading
        }
      >
        <SectionHeading heading="HIGHLIGHTS" subHeading="KEY" colors="false" />
      </Box>
      <Box className={TournamentDetailsKeyHighlightsStyles.mainContainer}>
        <Box className={TournamentDetailsKeyHighlightsStyles.topContainer}>
          {topContainer &&
            Array.isArray(topContainer) &&
            topContainer.length != 0 &&
            topContainer.map((each: any) => {
              return (
                <Box className={TournamentDetailsKeyHighlightsStyles.Image}>
                  <img src={each.imageLink} alt="" />
                  <Box
                    className={
                      each.id === 3
                        ? TournamentDetailsKeyHighlightsStyles.thirdHighlight
                        : TournamentDetailsKeyHighlightsStyles.highlight
                    }
                  >
                    <Box className={TournamentDetailsKeyHighlightsStyles.arrow}>
                      <img src={each.id === 3 ? upArrow : arrow} alt="" />
                    </Box>
                    <Box
                      className={TournamentDetailsKeyHighlightsStyles.content}
                    >
                      <Typography
                        className={TournamentDetailsKeyHighlightsStyles.year}
                      >
                        {each.year}
                      </Typography>
                      <Typography
                        className={
                          TournamentDetailsKeyHighlightsStyles.highlightText
                        }
                      >
                        {each.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
        </Box>
        <hr className={TournamentDetailsKeyHighlightsStyles.line}/>
        <Box className={TournamentDetailsKeyHighlightsStyles.bottomContainer}>
          {bottomContainer &&
            Array.isArray(bottomContainer) &&
            bottomContainer.length != 0 &&
            bottomContainer.map((each: any) => {
              return (
                <Box className={TournamentDetailsKeyHighlightsStyles.Image}>
                  <img src={each.imageLink} alt="" />
                  <Box
                    className={TournamentDetailsKeyHighlightsStyles.highlight}
                  >
                    <Box className={TournamentDetailsKeyHighlightsStyles.arrow}>
                      <img src={bottomArrow} alt="" />
                    </Box>
                    <Box
                      className={TournamentDetailsKeyHighlightsStyles.content}
                    >
                      <Typography
                        className={TournamentDetailsKeyHighlightsStyles.year}
                      >
                        {each.year}
                      </Typography>
                      <Typography
                        className={
                          TournamentDetailsKeyHighlightsStyles.highlightText
                        }
                      >
                        {each.description}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              );
            })}
        </Box>
      </Box>
    </>
  );
};

export default TournamentDetailsKeyHighlights;
