import React from "react";
import MovieLayout from "../layouts/Movie.layout";
import { Route } from "react-router-dom";

const MovieHOC = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <MovieLayout>
            <Component {...props} />
          </MovieLayout>
        )}
      />
    </>
  );
};

export default MovieHOC;