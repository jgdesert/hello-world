import React , {Component }from 'react';
import { Accounts } from 'meteor/accounts-base';

import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const UserForm = ( { loading,  client }  ) => {
   if (loading) {
     return (<div>Loading</div>)
   }
   else {
     return (
       <div>
       <RegisterForm client={client}/>
       <LoginForm client={client}/>
       <button onClick={() => {
           Meteor.logout();
           client.resetStore();
         }}>Logout</button>
       </div>
       );
       }
   }
 export default UserForm
