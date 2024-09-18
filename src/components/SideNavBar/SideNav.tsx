import { Box } from "@mui/material";
import sideNavstyles from "./SideNav.module.scss";
import React, { useEffect, useState } from "react";
interface ITournamentSummaryProps {
  content: any;
  scrollValue:number;
}
const SideNav: React.FC<ITournamentSummaryProps> = ({ content,scrollValue}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const handleClick = (tournamentTitle: string) => {
    setSelectedItem(tournamentTitle);
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        className={`${sideNavstyles.navbar}
        
        ${scrollPosition > scrollValue ? sideNavstyles.fixedNav : ""}      `}
      >
        {content &&
          Array.isArray(content) &&
          content.length != 0 &&
          content.map((tournamentTitle: any) => (
            <Box
              key={tournamentTitle.content}
              className={`${sideNavstyles.contentDiv} ${
                selectedItem === tournamentTitle.content
                  ? sideNavstyles.selectedContentDiv
                  : ""
              }`}
            >
              <Box className={sideNavstyles.navContent}>
                <a
                  href={`#${tournamentTitle.content}`}
                  className={sideNavstyles.anchorStyles}
                  onClick={() => handleClick(tournamentTitle.content)}
                >
                  {tournamentTitle.content}
                </a>
              </Box>
            </Box>
          ))}
      </Box>
    </>
  );
};
export default SideNav;
