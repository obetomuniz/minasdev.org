import React from "react";
import PropTypes from "prop-types";
import { Wrapper } from "./UI";

const Alert = ({ children }) => <Wrapper>{children}</Wrapper>;

Alert.propTypes = {
  children: PropTypes.node.isRequired
};

export default Alert;
