import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  card: {
    display: "flex",
    color: "red",
    border: "1px solid black",
    justifyContent: "space-between",
    margin: 20,
  },
  cancel: {
    color: "red",
  },
  add: {
    color: "green",
  },
  stroked: {
    textDecoration: "line-through",
  },
});

export const CardStyles = {
  maxWidth: "80%",
  margin: "auto",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale3d(1.1, 1.1, 2)",
    border: "1px dotted red",
  },
};
