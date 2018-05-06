import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
//Depandance connexion Apollo -> React App
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, from } from 'apollo-link';
//Permet de garder la connextion disponible et active
import { ApolloProvider } from 'react-apollo';

//import Interface Utilisateur client Web
import App from "../../clientWeb/App"

//creation lien http vers les donnees
const httpLink = new HttpLink({
  uri: Meteor.absoluteUrl('graphql')
});
//acces login token => access token in Resolvers.js
const authLink = new ApolloLink((operation,forward) => {
  const token = Accounts._storedLoginToken();
  operation.setContext(() => ({
    headers: {
      'meteor-login-token': token,
    }
  }));
  return forward(operation);
});

//create du cache
const cache = new InMemoryCache();

//creation client ApolloClient
const client = new ApolloClient({
  link: from([authLink, httpLink]),
  cache
});

//Create Component
const ApolloApp = () => (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
);

//Demmarage  Meteor + Affichage component
Meteor.startup(() => {
  render(<ApolloApp />, document.getElementById("app"));
});
