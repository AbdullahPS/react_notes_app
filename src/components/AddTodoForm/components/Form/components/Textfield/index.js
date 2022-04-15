import { TextField } from "@mui/material";
import { useStyles, white } from "./style";

const TextInputField = (props) => {
  const classes = useStyles();

  return (
    <TextField
      onBlur={props.onChange}
      id='noteTitle'
      label={`${props.type === "title" ? "Title" : "Text"}`}
      inputProps={{ className: classes.input }}
      variant='outlined'
      multiline={props.type === "title" ? false : true}
      minRows={`${props.type === "title" ? 1 : 2}`}
      size='small'
      sx={{ width: "70%", backgroundColor: white }}
      required
      margin='normal'
    />
  );
};
export default TextInputField;
