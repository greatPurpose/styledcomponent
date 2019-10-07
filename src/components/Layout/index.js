import React from "react";
import PropTypes from "prop-types";
import Theme from "../Theme";


const Layout = ({ children }) => (
  <Theme>
    <main>{children}</main>
  </Theme>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
