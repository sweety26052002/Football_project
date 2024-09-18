import { Box } from "@mui/material";
import HeadingFieldStyles from "./HeadingField.module.scss";
import React from "react";
interface IHeadingFieldProps {
  heading: string;
  subHeading: string;
  colors: string;
}
const SectionHeading: React.FC<IHeadingFieldProps> = ({
  heading,
  subHeading,
  colors = "false",
}) => {
  return (
    <Box className={HeadingFieldStyles.headingField}>
      <Box className={HeadingFieldStyles.subHeading}>{subHeading}</Box>
      <Box
        className={
          colors === "false"
            ? HeadingFieldStyles.heading
            : HeadingFieldStyles.headingColor
        }
      >
        {heading}
      </Box>
    </Box>
  );
};
export default SectionHeading;
