import { Box } from "@mui/material";
import React from "react";
import summarySectionStyles from "./summarySection.module.scss";
import { constants } from "../../constants/stringConstants";
import SectionHeading from "../HeadingField/HeadingField";
import image from "../../../src/assets/Durand_Cup 3.svg";
interface ISummaryProps {
  Eligibility: any;
  About: string;
}
const SummarySection: React.FC<ISummaryProps> = ({ Eligibility, About }) => {
  return (
    <>
      <Box
        className={summarySectionStyles.summarySection}
        id="Tournament Summary"
      >
        <Box className={summarySectionStyles.heading}>
          <SectionHeading
            heading={"SUMMARY"}
            subHeading={"TOURNAMENT "}
            colors="false"
          />
        </Box>
        <Box className={summarySectionStyles.tournaments}>
          <Box className={summarySectionStyles.DuranCupImage}>
            <img src={image}></img>
          </Box>
          <Box className={summarySectionStyles.summary}>
            <Box className={summarySectionStyles.eligibleDiv}>
              <Box>{constants.tournamentSummary.eligibility}</Box>
              <Box className={summarySectionStyles.qualities}>
                <Box className={summarySectionStyles.eligibility}>
                  <Box className={summarySectionStyles.eligibilityCriteria}>
                    <Box className={summarySectionStyles.criteria}>
                      {constants.tournamentSummary.age}:{" "}
                    </Box>
                    <Box>
                      <Box className={summarySectionStyles.result}>
                        {Eligibility.age[0]}
                      </Box>
                      <Box className={summarySectionStyles.checkCriteria}>
                        {constants.tournamentSummary.age}:
                        <Box className={summarySectionStyles.result}>
                          {Eligibility.age[1]}
                        </Box>
                      </Box>
                      <Box className={summarySectionStyles.checkCriteria}>
                        {constants.tournamentSummary.dob}:
                        <Box className={summarySectionStyles.result}>
                          {Eligibility.age[2]}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={summarySectionStyles.eligibility}>
                  <Box className={summarySectionStyles.eligibilityCriteria}>
                    <Box className={summarySectionStyles.criteria}>
                      {constants.tournamentSummary.teamComposition}
                    </Box>
                    <Box>
                      <Box className={summarySectionStyles.result}>
                        {Eligibility.teamComposition[0]}
                      </Box>
                      <Box className={summarySectionStyles.checkCriteria}>
                        {constants.tournamentSummary.squadSize}:
                        <Box className={summarySectionStyles.result}>
                          {Eligibility.teamComposition[1]}
                        </Box>
                      </Box>
                      <Box className={summarySectionStyles.checkCriteria}>
                        {constants.tournamentSummary.coach}:
                        <Box className={summarySectionStyles.result}>
                          {Eligibility.teamComposition[2]}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={summarySectionStyles.eligibility}>
                  <Box className={summarySectionStyles.eligibilityCriteria}>
                    <Box className={summarySectionStyles.criteria}>
                      {constants.tournamentSummary.gender}:
                    </Box>
                    <Box>
                      <Box className={summarySectionStyles.result}>
                        {Eligibility.gender[0]}
                      </Box>
                      <Box className={summarySectionStyles.checkCriteria}>
                        {constants.tournamentSummary.nationality}:
                        <Box className={summarySectionStyles.result}>
                          {Eligibility.gender[1]}
                        </Box>
                      </Box>
                      <Box className={summarySectionStyles.checkCriteria}>
                        {constants.tournamentSummary.medicalClearance}:
                        <Box className={summarySectionStyles.result}>
                          {Eligibility.gender[2]}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={summarySectionStyles.eligibility}>
                  <Box className={summarySectionStyles.eligibilityCriteria}>
                    <Box className={summarySectionStyles.criteria}>
                      {constants.tournamentSummary.playerExperience}
                    </Box>
                    <Box>
                      <Box className={summarySectionStyles.result}>
                        {Eligibility.playerExperience[0]}
                      </Box>
                      <Box className={summarySectionStyles.checkCriteria}>
                        {constants.tournamentSummary.skillLevel}:
                        <Box className={summarySectionStyles.result}>
                          {Eligibility.playerExperience[1]}
                        </Box>
                      </Box>
                      <Box className={summarySectionStyles.checkCriteria}>
                        {constants.tournamentSummary.clubAffiliation}:
                        <Box className={summarySectionStyles.result}>
                          {Eligibility.playerExperience[2]}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box>{constants.tournamentSummary.about}</Box>
              <Box className={summarySectionStyles.aboutSummary}>{About}</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default SummarySection;
