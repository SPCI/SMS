import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

class App extends Component {
  render() {
      if (this.props.data.loading) {
          return (<div>Loading</div>)
      }

      if (this.props.data.error) {
          console.log(this.props.data.error)
          return (<div>An unexpexted error occured</div>)
      }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          {this.props.data.allPersonaldetail.edges.map((pd) => {
              return(
                  <div>
                      <p>Hello {pd.node.firstName}</p>
                  </div>
              )
          })}
      </div>
    );
  }
}

const StudentQuery = gql`query StudentQuery{
    allPersonaldetail{
        edges{
            node{
                firstName
            }
        }
    }
}`;

const StudentWithData = graphql(StudentQuery)(App);

export default StudentWithData
