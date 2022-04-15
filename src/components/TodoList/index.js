import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useStyles, CardStyles } from "./styles";
import styles from "./style.module.css";

export default function NoteCard(props) {
  const classes = useStyles();

  return (
    <div className={styles.CardContainer}>
      <Card
        sx={{
          ...props.sx,
          ...CardStyles,
        }}>
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            align='center'
            component='div'
            className={props.marked ? classes.stroked : ""}>
            {props.title}
          </Typography>
          <Typography variant='body2' color='text.secondary' align='center'>
            {props.name}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <IconButton
            aria-label='cancel'
            color='secondary'
            onClick={props.markedHandler}>
            <CheckCircleOutlineIcon className={classes.add} />
          </IconButton>
          <IconButton
            aria-label='cancel'
            color='secondary'
            onClick={props.deleteHandler}>
            <CancelIcon className={classes.cancel} />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
