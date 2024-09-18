import { useState } from "react";
import SectionHeading from "../HeadingField/HeadingField";
import clubReviewStyles from "./ClubReview.module.scss";
import { Box, Modal, Typography } from "@mui/material";
import closeImage from "../../assets/carbon_close.png";
import { useNavigate } from "react-router-dom";
const ClubReview = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  return (
    <>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={clubReviewStyles.popUp}>
            <Box onClick={handleClose} className={clubReviewStyles.close}>
              <img src={closeImage} alt="close" />
            </Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              To leave a review, kindly register
            </Typography>
            <button onClick={() => navigate("/club-registration")}>
              Click here to Sign Up
            </button>
          </Box>
        </Modal>
      </div>
      <Box className={clubReviewStyles.heading}>
        <SectionHeading
          subHeading="LEAVE US A"
          heading="REVIEW"
          colors="false"
        />
        <textarea
          onClick={handleOpen}
          placeholder="| Share your experience here..."
          className={clubReviewStyles.reviewText}
        ></textarea>
      </Box>
    </>
  );
};

export default ClubReview;
