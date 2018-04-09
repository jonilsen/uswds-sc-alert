import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import Alert from "./components/alert/alert";

const theme = {
  colorGrayLightest: "#f1f1f1",
  colorGreen: "#2e8540",
  colorGreenLightest: "#e7f4e4",
  colorGold: "#fdb81e",
  colorGoldLightest: "#fff1d2 ",
  colorSecondary: "#e31c3d ",
  colorSecondaryLightest: "#f9dede",
  colorPrimaryAlt: "#02bfe7",
  colorPrimaryAltLightest: "#e1f3f8",
  spacingMedium: "2rem",
  spacingSmall: "1rem",
  iconSize: "3rem"
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Alert />
      </ThemeProvider>
    );
  }
}

export default App;
