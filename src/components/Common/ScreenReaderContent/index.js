import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./UI";

const ScreenReaderContent = props => <Wrapper {...props}>{props.children}</Wrapper>;

ScreenReaderContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default ScreenReaderContent;
