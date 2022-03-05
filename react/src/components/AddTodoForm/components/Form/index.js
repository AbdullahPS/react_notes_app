import { Typography, Button } from "@mui/material";
import { React, useRef } from "react";
import TextInputField from "./components/Textfield";
import Box from "@mui/material/Box";

const Form = (props) => {
  const formRef = useRef();
  const textElementFieldsPosition = [1, 3];

  const clearInput = () => {
    textElementFieldsPosition.forEach(
      (element) => (formRef.current[element].value = "")
    );
  };

  return (
    <Box textAlign='center'>
      <form onSubmit={props.buttonFormHandler} ref={formRef}>
        <div>
          <Typography variant='h6'>Add Todo</Typography>

          <Button
            variant='outlined'
            onClick={clearInput}
            size='small'
            sx={{ margin: 1 }}>
            Clear Input
          </Button>
        </div>

        <TextInputField type='title' onChange={props.titleChange} />
        <TextInputField onChange={props.textChange} />
        <Button
          type='submit'
          variant='contained'
          color='secondary'
          sx={{ display: "block", margin: "0 auto" }}>
          Add Note
        </Button>
      </form>
    </Box>
  );
};

export default Form;
