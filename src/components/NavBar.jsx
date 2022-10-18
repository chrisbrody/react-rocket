import StyledCustomButton from "./StyledCustomButton";
import logo from "../logo.svg";
import logoMobile from "../logoMobile.svg";
import { Toolbar, Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

const styles = makeStyles({
  bar: {
    paddingTop: "1.15rem",
    backgroundColor: "#fff",
    ["@media (max-width:780px)"]: {
      flexDirection: "column",
    },
  },
  logo: {
    width: "15%",
    ["@media (max-width:780px)"]: {
      display: "none",
    },
  },
  logoMobile: {
    width: "100%",
    display: "none",
    ["@media (max-width:780px)"]: {
      display: "inline-block",
    },
  },
  menuItem: {
    cursor: "pointer",
    flexGrow: "1",
    "&:hover": {
      color: "#4f25c8",
    },
    ["@media (max-width:780px)"]: {
      paddingBottom: "1rem",
    },
  },
  link: {
    textDecoration: "none!important",
    color: "#000000!important",
  },
});

function NavBar() {
  const classes = styles();
  return (
    <Toolbar
      position="sticky"
      color="rgba(0, 0, 0, 0.87)"
      className={classes.bar}
    >
      <img src={logo} className={classes.logo} />
      <img src={logoMobile} className={classes.logoMobile} />
      <Typography variant="h6" className={classes.menuItem}>
        <Link target="_blank" href="http://google.com" className={classes.link}>
          About
        </Link>
      </Typography>
      <Typography variant="h6" className={classes.menuItem}>
        Blog
      </Typography>
      <Typography variant="h6" className={classes.menuItem}>
        Careers
      </Typography>
      <Typography variant="h6" className={classes.menuItem}>
        Demos
      </Typography>
      <Typography variant="h6" className={classes.menuItem}>
        Contact Us
      </Typography>
      <StyledCustomButton txt="Trial Our Product" />
    </Toolbar>
  );
}

export default NavBar;
