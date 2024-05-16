import React from "react";
import { createTheme, ThemeProvider, colors } from "@mui/material";
// import RatingEx from "./components/RatingEx";
// import AutoCompleteEx from "./components/AutoCompleteEx";
import BoxEx from "./components/BoxEx";
import GridEx from "./components/GridEx";
import { MasonryEx } from "./components/MasonryEx";
import { MuiCustomTheme } from "./components/MuiCustomTheme";
// import CheckBoxEx from "./components/CheckBoxEx";
// import SwitchEx from "./components/SwitchEx";
// import RadioEx from "./components/RadioEx";
// import SelectEx from "./components/SelectEx";
// import TextFieldEx from "./components/TextFieldEx";
// import TypographyEx from "./components/TypographyEx";
// import ButtonEx from "./components/ButtonEx";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <TypographyEx /> */}
      {/* <ButtonEx /> */}
      {/* <TextFieldEx /> */}
      {/* <SelectEx /> */}
      {/* <RadioEx /> */}
      {/* <CheckBoxEx /> */}
      {/* <SwitchEx /> */}
      {/* <RatingEx /> */}
      {/* <BoxEx />
      <GridEx />
      <MasonryEx /> */}
      <MuiCustomTheme />
    </ThemeProvider>
  );
}

export default App;
