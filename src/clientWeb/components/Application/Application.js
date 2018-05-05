import React , { Component } from 'react';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';
import {graphql} from 'react-apollo';

class Application extends React.Component {

    static propTypes = {
      data: PropTypes.object,
    }
    render () {
                if (this.props.data.loading) {
                  return (<div>Loading</div>)
                }
                if (this.props.data.error) {
                console.log(this.props.data.error)
                return (<div>An unexpected error occurred</div>)
                }
                else {  return (
                                  <div>
                                      <h1 key={this.props.data.application._id}>{this.props.data.application.name}</h1>

                                  </div>
                                );
                    }
            }
}
const ApplicationSchema = gql`
query Application {
    application {
        _id
        name
    }
}
`
export default graphql(ApplicationSchema)(Application);
