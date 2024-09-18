import { Box } from "@mui/material";
import TotalTournament from "./TotalTournament.module.scss";
import React from "react";
import { Link } from "react-router-dom";
interface ITournamentsProps {
  heading: string;
}
const SecondarySectionHeading: React.FC<ITournamentsProps> = ({ heading }) => {
  return (
    <>
      <Box className={TotalTournament.title}>
        <Box className={TotalTournament.text}>{heading}</Box>
        <Link to={"#"} className={TotalTournament.viewMore}>View More</Link>
      </Box>
    </>
  );
};
export default SecondarySectionHeading;
