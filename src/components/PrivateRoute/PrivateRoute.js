import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({children,...rest}) => {
    const [loginUserDetails, setLoginUserDetails] = useContext();
    return (
        <Route
      {...rest}
      render={({ location }) =>
      loginUserDetails.isSignIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;