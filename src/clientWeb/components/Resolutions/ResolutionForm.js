import React, { Component } from 'react';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';

const createResolutionTag = gql `
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`;

class ResolutionForm extends Component {

  submitForm = () => {
    console.log(this.name.value);

    this.props.createResolution({
        variables:{
          name: this.name.value
        }
    })
    .catch(error => {
      console.log(error);
    })
  };

  render() {
    return (
      <div>
        <input type="text" ref={input => (this.name = input)}/>
        <button onClick={this.submitForm}> Submit </button>
      </div>
    );
  }
}


export default graphql(createResolutionTag, {
  name: "createResolution",
  options: {
    refetchQueries:['App']
  }
})(ResolutionForm);
