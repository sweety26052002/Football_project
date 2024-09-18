import { Link } from "react-router-dom";
import SideDrawerStyles from "./SideDrawer.module.scss";
import { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { sideNavList } from "./SideDrawerData";

const SideDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${SideDrawerStyles.container} ${
        open && SideDrawerStyles.containerClosed
      }`}
    >
      <ul className={SideDrawerStyles.sideNavList}>
        {sideNavList &&
          Array.isArray(sideNavList) &&
          sideNavList.length > 0 &&
          sideNavList.map((item) => (
            <li className={SideDrawerStyles.sideNavListItem} key={item.id}>
              <Link to={item.path}>
                {<item.icon />}
                <span
                  className={`${SideDrawerStyles.sideNavListItemText} ${
                    open && SideDrawerStyles.sideNavListItemTextClosed
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
      </ul>
      <div
        className={SideDrawerStyles.toggleButton}
        onClick={() => setOpen(!open)}
      >
        {open ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}
      </div>
    </div>
  );
};

export default SideDrawer;
