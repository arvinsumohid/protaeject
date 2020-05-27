import React from 'react';
import Users from './Users';
import Post from './Post';
import PageNotFound from './PageNotFound';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

  function Routing() {
    const routes= [
            // {path:'/post/:postid', component: Post},
            {path:'/users', component: Users},
            {path:'/user/:userid', component: Users},
            {path:'/*', component: PageNotFound},
    ];

    return (
        <Router>
          <Switch>
            {routes.map((route) => (
                // <React.Fragment >
                  <Route key={route.path} path={route.path} component={route.component} />
                // </React.Fragment>
              )
            )}
          </Switch>
        </Router>
    );
  }

  export default Routing;