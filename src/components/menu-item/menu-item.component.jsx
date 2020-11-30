import React from "react";
import { withRouter } from "react-router-dom";

// styled-components
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  MenuItemTitle,
  MenuItemSubtitle,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, history, size, linkUrl, match }) => (
  <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer
      className="background-image"
      imageUrl={imageUrl}
    ></BackgroundImageContainer>
    <ContentContainer>
      <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
      <MenuItemSubtitle>SHOP NOW</MenuItemSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
