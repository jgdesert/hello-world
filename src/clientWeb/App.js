import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Accounts } from 'meteor/accounts-base';
import { withApollo } from 'react-apollo';
//Components
import HelloWorld from './components/HelloWorld/HelloWorld';
import ResolutionForm from './components/Resolutions/ResolutionForm';
import UserForm from './components/UserForm/UserForm';
import Application from './components/Application/Application';


// Component ROOT App
const App = ( {loading, rootApi , resolutions, client} ) => {
  if (loading) return null;
  return (
    <div>


      <h1>{ rootApi }</h1>
      <UserForm client={client}/>

      <HelloWorld/>

      <Application/>

      <ResolutionForm/>

        <ul>
        {resolutions.map(resolution => (
          <li key={resolution._id}>{resolution.name}</li>
        ))}
      </ul>
    </div>
  );
}
// rootTag Graphql
const rootTag = gql`
query App {
  rootApi
  resolutions {
    _id
    name
  }
}
`
export default graphql(rootTag, {
  props: ({data}) => ({...data })
})(withApollo(App));
