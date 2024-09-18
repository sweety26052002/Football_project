import React, { useEffect, useState } from "react";
import UploadMediaStyles from "./UploadMedia.module.scss";
import { constants } from "../../constants/stringConstants";
import { Box, Modal, Typography } from "@mui/material";
import uploadImageIcon from "../../assets/feather_upload-cloud.svg";
import cancelIcon from "../../assets/Path.svg";
interface FileUploadProps {
  multiple?: boolean;
  values?: any;
  handleChange: (e: any) => void;
  label: string;
  smallHeight?: boolean;
  name?: string;
  fieldData?: any;
  setClubMediaData?: any;
}

interface ImagePreviewProps {
  imageUrl: string;
  index: number;
  handleCancelClick: (index: number) => void;
  handleOpenModal: (index: number) => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  imageUrl,
  index,
  handleCancelClick,
  handleOpenModal,
}) => (
  <div className={UploadMediaStyles.preview} key={index}>
    <span
      className={UploadMediaStyles.cancelButton}
      onClick={() => handleCancelClick(index)}
    >
      <img src={cancelIcon} alt="Cancel" />
    </span>
    <img
      src={imageUrl}
      alt="Preview"
      onClick={() => handleOpenModal(index)}
      className={UploadMediaStyles.chooseImage}
    />
  </div>
);
const SingleUploadInput: React.FC<{
  values: any;
  smallHeight?: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOpenModal: (index: number) => void;
  setPreviewImages?: any;
  fieldData: any;
}> = ({
  values,
  smallHeight,
  handleChange,
  fieldData,
  handleOpenModal,
  setPreviewImages,
}) => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  useEffect(() => {
    if (values) {
      setUploadedImage(URL.createObjectURL(values));
      setPreviewImages([URL.createObjectURL(values)]);
    }
  }, [values]);

  const handleCancelClick = () => {
    setUploadedImage(null);
  };

  return (
    <div
      className={`${UploadMediaStyles.singleUploadContainer}
    
    ${
      smallHeight
        ? UploadMediaStyles.smallHeight
        : UploadMediaStyles.largeHeight
    }`}
    >
      <input
        id={`${fieldData.name}`}
        type="file"
        {...fieldData}
        onChange={(e) => {
          handleChange(e);
        }}
        accept="image/png, image/jpg, image/jpeg, image/svg"
        style={{ display: "none" }}
      />
      {uploadedImage ? (
        <div className={UploadMediaStyles.preview}>
          <span
            className={UploadMediaStyles.cancelButton}
            onClick={handleCancelClick}
          >
            <img src={cancelIcon} alt="Cancel" />
          </span>
          <img
            src={uploadedImage}
            alt="Preview"
            onClick={() => handleOpenModal(0)}
            className={UploadMediaStyles.chooseImage}
          />
        </div>
      ) : (
        <label
          className={UploadMediaStyles.label}
          htmlFor={`${fieldData.name}`}
        >
          <img src={uploadImageIcon} alt="upload-image" />
          <div className={UploadMediaStyles.selectTextContainer}>
            <h2>
              <span className={UploadMediaStyles.selectText}>Select</span>{" "}
              {constants.uploadMedia.heading}
            </h2>
            <h3> {constants.uploadMedia.singleUploadSubHeading}</h3>
          </div>
        </label>
      )}
    </div>
  );
};

const MultipleUploadInput: React.FC<{
  fieldData: any;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ fieldData, handleFileChange }) => (
  <div className={UploadMediaStyles.multipleUploadContainer}>
    <input
      id="multiple-file-input"
      type="file"
      accept="image/png, image/jpg, image/jpeg, image/svg"
      {...fieldData}
      onChange={(e) => {
        handleFileChange(e);
      }}
      multiple
      style={{ display: "none" }}
    />

    <label className={UploadMediaStyles.label} htmlFor="multiple-file-input">
      <img src={uploadImageIcon} alt="upload-image" />
      <div className={UploadMediaStyles.selectTextContainer}>
        <h2>
          <span className={UploadMediaStyles.selectText}>Select</span>{" "}
          {constants.uploadMedia.heading}
        </h2>
        <h3> {constants.uploadMedia.singleUploadSubHeading}</h3>
      </div>
    </label>
  </div>
);

const UploadMedia: React.FC<FileUploadProps> = ({
  multiple = false,
  values,
  label,
  smallHeight = false,
  handleChange,
  fieldData,
  setClubMediaData,
}) => {
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const handleOpenModal = (index: number) => {
    setOpenModal(true);
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImageIndex(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (multiple) {
      handleChange(event);
      const files = event.target.files;
      if (files) {
        setClubMediaData(files);
      }
    }
  };
  // useEffect(() => {
  //   if (values && values.length > 0) {
  //     const imageUrls = Array.from(values).map((file: any) =>
  //       URL.createObjectURL(file)
  //     );
  //     setPreviewImages((prevImages) => {
  //       if (multiple) {
  //         return [...prevImages, ...imageUrls];
  //       } else {
  //         return imageUrls;
  //       }
  //     });
  //   }
  // }, [values]);
  useEffect(() => {
    if (values && values.length > 0) {
      const imageUrls = Array.from(values).map((file: any) =>
        URL.createObjectURL(file)
      );
      setPreviewImages(imageUrls);
    }
  }, [values]);

  const handleCancelClick = (index: number) => {
    setPreviewImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <>
      {label && <label className={UploadMediaStyles.labelText}>{label}</label>}
      <div className={UploadMediaStyles.container}>
        {multiple ? (
          <MultipleUploadInput
            fieldData={fieldData}
            handleFileChange={handleFileChange}
          />
        ) : (
          <SingleUploadInput
            handleOpenModal={handleOpenModal}
            values={values}
            smallHeight={smallHeight}
            handleChange={handleChange}
            fieldData={fieldData}
            setPreviewImages={setPreviewImages}
          />
        )}
        {multiple && (
          <div className={UploadMediaStyles.previewContainer}>
            {previewImages.map((imageUrl, index) => (
              <ImagePreview
                key={index}
                imageUrl={imageUrl}
                index={index}
                handleCancelClick={handleCancelClick}
                handleOpenModal={handleOpenModal}
              />
            ))}
          </div>
        )}
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={UploadMediaStyles.imageModal}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
            ></Typography>
            <Typography id="modal-modal-description">
              <div className={UploadMediaStyles.modalElements}>
                <div className={UploadMediaStyles.imageElement}>
                  <span
                    onClick={handleCloseModal}
                    className={UploadMediaStyles.closeButton}
                  >
                    <img src={cancelIcon} alt="Cancel" />
                  </span>
                  {selectedImageIndex !== null && (
                    <img
                      src={previewImages[selectedImageIndex]}
                      alt="Preview"
                      className={UploadMediaStyles.imageStyle}
                    />
                  )}
                </div>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default UploadMedia;
