import React from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

import HWrootDiv from './HWrootDiv'
import HWrootApi from './HWrootApi'

const HelloWorld = ( { } ) => {
  return (
    <div>
      
      <HWrootApi />
    </div>

    );
}
export default HelloWorld
