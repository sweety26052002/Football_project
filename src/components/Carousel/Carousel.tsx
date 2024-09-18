import Slider from "react-slick";
import "./Carousel.scss";
import { coachCertificationImages } from "../../constants/coachImagesConstants";
import { Box } from "@mui/material";
import SectionHeading from "../HeadingField/HeadingField";
interface Idata {
  id: number;
  name: string;
  imageLink: string;
  experience: string;
  certification: string;
}
interface IcarouselData {
  data: Idata[];
  variant: string;
  noOfSlides: number;
  secondCarouselData: any;
}
function Carousel(props: IcarouselData) {
  const { data, variant, secondCarouselData } = props;
  var settings = {
    infinite: false,
    gap: 100,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="hallOfFameCarouselContainer">
      {variant === "primary" ? (
        <Box className="heading">
          <SectionHeading
            subHeading="OUR"
            heading="HALL OF EXPERTISE"
            colors="false"
          />
        </Box>
      ) : (
        <Box className="heading">
          <SectionHeading subHeading="OUR" heading="MOMENTS" colors="false" />
        </Box>
      )}{" "}
      <div
        className={`${"sliderContainer"} ${
          variant === "secondary" ? "secondarySlideContainer" : ""
        }`}
      >
        <Slider {...settings} className="slickSlider">
          {variant === "primary" &&
            data &&
            Array.isArray(data) &&
            data.length !== 0 &&
            data.map((each) => {
              return (
                <div className="card">
                  <div className="images">
                    <img src={each.imageLink} alt="" />
                    <div className="coachContent">
                      <div className="coachName">{each.name}</div>
                      <div className="coachExpertise">
                        <div className="coachCertificate">
                          <img
                            src={coachCertificationImages.experience}
                            alt=""
                          />
                          <span>{each.experience}</span>
                        </div>
                        <div className="coachExperience">
                          <img
                            src={coachCertificationImages.certificate}
                            alt=""
                          />
                          <span>{each.certification}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          {variant === "secondary" &&
            secondCarouselData &&
            Array.isArray(secondCarouselData) &&
            secondCarouselData.length !== 0 &&
            secondCarouselData.map((each) => {
              return (
                <div className="secondaryCarousel">
                  <img src={each.imageLink} alt="" />
                </div>
              );
            })}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
