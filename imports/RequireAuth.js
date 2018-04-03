// import React from 'react'

// export const RequireAuth = (nextState, replace, callback) => {

//   // If no user, redirect to login
//   if (!Meteor.loggingIn() && !Meteor.userId()) {
//     replace({
//       pathname: '/login',
//       state: { nextPathname: nextState.location.pathname },
//     });
//   }

//   // If user is admin, redirect to /admin
//   Meteor.subscribe("currentUser", {
//     onReady: function () { 
//       if (Roles.userIsInRole(Meteor.userId(), ['super-admin', 'admin'])) {
//         replace({
//           pathname: '/admin',
//           state: { nextPathname: nextState.location.pathname },
//         });
//       };
//       callback();
//     },
//     onError: function () { 
//       console.log("error"); 
//     }
//   });   
// };