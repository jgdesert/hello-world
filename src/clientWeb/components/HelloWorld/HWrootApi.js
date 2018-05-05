import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

const rootApiSchema = gql`
  {
    helloworld
  }
`

const HWRootApi = ( { data } ) => {
  return (
        <h1>{ data.helloworld }</h1>
    );
}
export default graphql(rootApiSchema)(HWRootApi);
