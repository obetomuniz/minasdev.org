import React from "react";
import PropTypes from "prop-types";
import { Wrapper, FooterText } from "./UI";

const Footer = () => {
  return (
    <Wrapper>
      <FooterText>
        2013-
        {new Date().getFullYear()} © Minas Dev
      </FooterText>
    </Wrapper>
  );
};

Footer.propTypes = {};

export default Footer;
