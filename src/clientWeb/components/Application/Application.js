// each <h2> and <li> is an exercices
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
                                      <h2 key={this.props.data.application._id}>{this.props.data.application.name}</h2>

                                      <ul>
                                       <li key={this.props.data.application.inlinedata._id}>{this.props.data.application.inlinedata.name}</li>

                                       {this.props.data.application.inlinedataArray.map(inlineArray => (  <li key={inlineArray._id}>{inlineArray.name}</li>  ))}

                                       {this.props.data.application.mongodata.map(mongo => (  <li key={mongo._id}>{mongo.name}</li>  ))}

                                      </ul>

                                  </div>
                                );
                    }
            }
}
// edit on Tag all the data you want to get in this file
const ApplicationSchema = gql`
query Application {
    application {
        _id
        name
        inlinedata {
          _id
          name
        }
        inlinedataArray {
          _id
          name
        }
        mongodata {
          _id
          name
        }
    }
}
`
export default graphql(ApplicationSchema)(Application);
