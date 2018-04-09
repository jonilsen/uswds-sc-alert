import React from "react";
import styled from "styled-components";

const UsaAlert = styled.div`
  background-color: ${props => props.theme.colorGrayLightest};
  background-position: ${props => props.theme.spacingMedium}
    ${props => props.theme.spacingMedium};
  background-repeat: no-repeat;
  background-size: 5.2rem;
  padding-bottom: 1.4rem;
  padding-left: 3rem;
  padding-right: ${props => props.theme.spacingMedium};
  padding-top: ${props => props.theme.spacingMedium};
  position: relative;
`;

//Create a new Todo item
class Alert extends React.Component {
  render() {
    return (
      <UsaAlert>
        <div>
          <h3>Success Status</h3>
          <p>
            Lorem ipsum dolor sit amet,{" "}
            <a href="javascript:void(0);">consectetur adipiscing</a> elit, sed
            do eiusmod.
          </p>
        </div>
      </UsaAlert>
    );
  }
}

export default Alert;
