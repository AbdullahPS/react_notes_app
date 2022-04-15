import { createTheme } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import { white } from "../AddTodoForm/components/Form/components/Textfield/style";
const theme = createTheme({
  typography: {
    fontFamily: "Kanit",
  },
  palette: {
    primary: blueGrey,
    secondary: {
      main: white,
    },
  },
});

export default theme;
