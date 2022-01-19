import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Registry } from './pages/Registry';


export const useRoutes = () => {
// export const useRoutes = (isAuthenticated) => {
  // if (isAuthenticated) {
  //   return (
  //     <Switch>
  //       <Route path="/tasks" exact>
  //         <TaksPage />
  //       </Route>
  //       <Route path="/tasks/:id" exact>
  //         <WorkWIthPage />
  //       </Route>
  //       <Route path="/" exact>
  //         < />
  //       </Route>
  //       <Redirect to="/" />
  //     </Switch>
  //   );
  // }

  return (
    <Switch>
      <Route path="./pages/GuestHome" exact>
        <LoginPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
