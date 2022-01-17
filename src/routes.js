// import React from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import { Auth } from './pages/Auth';
// import { TaksPage } from './pages/TasksPage';
// import { WorkWIthPage } from './pages/WorkWIthPage';
// import { CreateTaskPage } from './pages/CreateTaskPage';
//
// export const useRoutes = (isAuthenticated) => {
//   if (isAuthenticated) {
//     return (
//       <Switch>
//         <Route path="/tasks" exact>
//           <TaksPage />
//         </Route>
//         <Route path="/tasks/:id" exact>
//           <WorkWIthPage />
//         </Route>
//         <Route path="/createtask" exact>
//           <CreateTaskPage />
//         </Route>
//         <Redirect to="/tasks" />
//       </Switch>
//     );
//   }
//
//   return (
//     <Switch>
//       <Route path="/auth/login" exact>
//         <LoginPage />
//       </Route>
//       <Route path="/auth/register" exact>
//         <RegisterPage />
//       </Route>
//       <Redirect to="/auth/login" />
//     </Switch>
//   );
// };
