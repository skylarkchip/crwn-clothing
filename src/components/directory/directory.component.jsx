import React from "react";
import { createStructuredSelector } from "reselect";

// components
import MenuItem from "../menu-item/menu-item.component";

// Redux
import { connect } from "react-redux";
import { selectDirectorySection } from "../../redux/directory/directory.selectors";

// styles
import "./directory.styles.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection,
});

export default connect(mapStateToProps)(Directory);
