import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import StyledCustomButton from "./StyledCustomButton";

const styles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 5rem 0 5rem",
  },
  item: {
    paddingTop: "1rem",
  },
});

function Grid(props) {
  const { icon, title, btnTitle } = props;
  const classes = styles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.item}>{icon}</div>
      <Typography className={classes.item} variant="h5">
        {title}
      </Typography>
      <div className={classes.item}>
        <StyledCustomButton txt={btnTitle} />
      </div>
    </div>
  );
}

export default Grid;
