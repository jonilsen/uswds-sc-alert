import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colorGreen: "#2e8540",
  colorGreenLight: "#4aa564"
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <h1>Hello World</h1>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
