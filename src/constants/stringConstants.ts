import footerEmail from "../assets/email.svg";
import footerTwitter from "../assets/twitter.svg";
import footerInstagram from "../assets/InstagramLogo.svg";
import footerYoutube from "../assets/youtube.svg";
import footerLinkedin from "../assets/linkedinLogo.svg";

export const constants = {
  uploadMedia: {
    singleUploadSubHeading: "Formats: JPG, PNG, or JPEG.",
    multipleUploadHeading: " a file or Drag and drop here",
    heading: " a file or Drag and drop here",
    multipleUploadSubHeading:
      " 1-5 images, please! Formats: JPG, PNG, SVG or JPEG.",
  },
  tournamentSummary:{
    eligibility:"Eligibility",
    about:"About",
    age:"Age",
    teamComposition:"Team Composition",
    gender:"Gender",
    playerExperience:"Player Experience",
    dob:"DOB",
    squadSize:"Squad Size",
    coach:"Coach/Manager",
    nationality:"Indian",
    medicalClearance:"Medical Clearance",
    skillLevel:"Skill Level",
    clubAffiliation:"Club Affiliation",
  },
  clubpageDetails: {
    location: "Location",
    clublevel: "Club Level",
    category: "Category",
    primarycontact: "Primary Contact Name",
    email: "Email-id",
    contact: "Contact Number",
  },
  tournamentPagedetails:{
    level:"Level",
    ageGroup:"Age group",
    clubsAssociated:"Clubs associated",
    upcomingMatch:"Upcoming Match",
    totalPrizePool:"Total Prize Pool",
    tournamentName:"Tournament name"
  },
  videoMedia: {
    rightText: "TODAY, TOMORROW & ALWAYS",
    leftText: "UNVEIL THE REALM OF INDIAN SOCCER",
  },
  footer: {
    newsletter: {
      heading: "Stay Updated",
      link: "Subscribe to our newsletters ",
    },
    socialMedia: {
      heading: "Follow us on social media",
      headingfor1366:"Follow us",
      types: [
        {
          id: 1,
          name: "Twitter",
          link: "https://www.twitter.com/",
          icon: footerTwitter,
        },
        {
          id: 2,
          name: "Instagram",
          link: "https://www.instagram.com/",
          icon: footerInstagram,
        },
        {
          id: 3,
          name: "Youtube",
          link: "https://www.youtube.com/",
          icon: footerYoutube,
        },
        {
          id: 4,
          name: "LinkedIn",
          link: "https://www.linkedin.com/",
          icon: footerLinkedin,
        },
      ],
    },
    allRights: "© 2024 All rights reserved",
    emailData: {
      email: "Contact@SoccerScoutIndia.in",
      icon: footerEmail,
    },
  },
  championsSectionText:{
    text:"CELEBRATING THE LEGENDS"
  }
};
