import React from "react";

// styles
import "./homepage.styles.scss";

// components
import "../../components/directory/directory.component";
import Directory from "../../components/directory/directory.component";

const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
