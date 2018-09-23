import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./UI";

const ScreenReaderContent = ({ children }) => <Wrapper>{children}</Wrapper>;

ScreenReaderContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default ScreenReaderContent;
