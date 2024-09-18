import styles from "./Header.module.scss";
import headerlogo from "../../assets/Frame 7.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { headerList } from "./headerData";

interface IHeaderButtonProps {
  page: {
    id: number;
    name: string;
    path: string;
    subLinks?: { name: string; path: string }[];
  };
  navigate: (path: string) => void;
  showSublinks: boolean;
  setShowSublinks: (showSublinks: boolean) => void;
}

const HeaderButton = ({
  page,
  navigate,
  showSublinks,
  setShowSublinks,
}: IHeaderButtonProps) => {
  const { id, name, path, subLinks } = page;

  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("click", (event: any) => {
      if (event.target.textContent != "Career Path") {
        setShowSublinks(false);
      }
    });
  }, []);
  return (
    <Box className={subLinks ? styles.PathButton : ""}>
      <Button
        className={pathname === path ? styles.active : ""}
        key={id}
        onClick={() => {
          if (!subLinks) {
            navigate(path);
          } else {
            setShowSublinks(!showSublinks);
          }
        }}
      >
        <Box className={styles.pageName}>{name}</Box>
        {subLinks && <Box className={styles.triangleDown}></Box>}
      </Button>
      {subLinks && showSublinks && (
        <Box className={styles.pathCard}>
          {subLinks.map((item) => {
            const { name, path } = item;
            return (
              <p
                key={name}
                onClick={() => {
                  navigate(path);
                }}
              >
                {name}
              </p>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

const Header = () => {
  const navigate = useNavigate();
  const [showSublinks, setShowSublinks] = useState(false);
  return (
    <AppBar position="fixed" className={styles.container}>
      <Container maxWidth="xl" className={styles.container}>
        <Box className={styles.container__logo}>
          <img src={headerlogo} onClick={() => navigate("/home")} />
        </Box>
        <Box className={styles.container__content}>
          {headerList.map((page) => (
            <HeaderButton
              key={page.id}
              page={page}
              navigate={navigate}
              showSublinks={showSublinks}
              setShowSublinks={setShowSublinks}
            />
          ))}
        </Box>
      </Container>
    </AppBar>
  );
};
export default Header;
