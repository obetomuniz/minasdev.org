import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { GlobalStyle, Wrapper } from "./UI";
import { renderRoutes } from "@services/Routes";

const Layout = ({ route }) => (
  <Fragment>
    <GlobalStyle />
    <Wrapper>{renderRoutes(route.routes)}</Wrapper>
  </Fragment>
);

Layout.propTypes = {
  route: PropTypes.object.isRequired
};

export default Layout;
