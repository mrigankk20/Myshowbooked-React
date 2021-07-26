import React from "react";
import { Route } from "react-router-dom";

// Layout
import DefaultLayout from "../layouts/Default.layout";
import Navbar from "../components/Navbar/navbar.component";

const DefaultHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        )}
      />
    </>
  );
};

export default DefaultHOC;