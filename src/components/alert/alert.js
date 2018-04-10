import React from "react";
import styled from "styled-components";

const UsaAlert = styled.div`
  background-color: ${props => {
    if (!props.variant) return props.theme.colorGrayLightest;
    if (props.variant === "success") return props.theme.colorGreenLightest;
    if (props.variant === "warning") return props.theme.colorGoldLightest;
    if (props.variant === "error") return props.theme.colorSecondaryLightest;
    if (props.variant === "info") return props.theme.colorPrimaryAltLightest;
  }};
  background-position: ${props => props.theme.spacingMedium}
    ${props => props.theme.spacingMedium};
  background-repeat: no-repeat;
  background-size: 5.2rem;
  padding-bottom: 1.4rem;
  padding-left: 3rem;
  padding-right: ${props => props.theme.spacingMedium};
  padding-top: ${props => props.theme.spacingMedium};
  position: relative;

  &:before {
    background-color: ${props => {
      if (!props.variant) return props.theme.colorGray;
      if (props.variant === "success") return props.theme.colorGreen;
      if (props.variant === "warning") return props.theme.colorGold;
      if (props.variant === "error") return props.theme.colorSecondary;
      if (props.variant === "info") return props.theme.colorPrimaryAlt;
    }};
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: ${props => props.theme.spacingSmall};
  }

  a {
    color: ${props => props.theme.colorPrimaryDarker};

    &:focus,
    &:hover {
      color: ${props => props.theme.colorPrimaryDarkest};
    }
  }

  ul {
    margin-bottom: 0;
    margin-top: ${props => props.theme.spacingSmall};
    padding-left: ${props => props.theme.spacingSmall};
  }
`;

const UsaAlertBody = styled.div`
  display: table-cell;
  vertical-align: top;
`;

const UsaAlertHeading = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
`;

const UsaAlertText = styled.p`
  font-family: sans-serif;
  margin-bottom: 0;
  margin-top: 0;

  &:only-child {
    margin-bottom: $spacing-small;
    padding-top: $spacing-x-small;
  }
`;

//Create a new Todo item
class Alert extends React.Component {
  render() {
    return (
      <UsaAlert variant="success">
        <UsaAlertBody>
          <UsaAlertHeading>Success Status</UsaAlertHeading>
          <UsaAlertText>
            Lorem ipsum dolor sit amet,{" "}
            <a href="javascript:void(0);">consectetur adipiscing</a> elit, sed
            do eiusmod.
          </UsaAlertText>
        </UsaAlertBody>
      </UsaAlert>
    );
  }
}

export default Alert;
