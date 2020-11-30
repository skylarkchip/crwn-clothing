import React from "react";

// components
import "../../components/directory/directory.component";
import Directory from "../../components/directory/directory.component";

// styled-component
import { HomePageContainer } from "./homepage.styles";

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePage;
