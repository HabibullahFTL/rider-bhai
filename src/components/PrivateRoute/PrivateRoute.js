import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({children,...rest}) => {
    const [loginUserDetails, setLoginUserDetails] = useContext(UserContext);
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