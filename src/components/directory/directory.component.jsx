import React from "react";
import { createStructuredSelector } from "reselect";

// components
import MenuItem from "../menu-item/menu-item.component";

// styled-components
import { DirectoryMenuContainer } from "./directory.styles";

// Redux
import { connect } from "react-redux";
import { selectDirectorySection } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
