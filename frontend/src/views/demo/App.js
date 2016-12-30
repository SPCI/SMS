import React from 'react';
import logo from '../../logo.svg';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import './App.css';

class App extends React.Component {
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
          <p>{this.props.data.PersonalDetails.firstName}</p>
          <p>{this.props.data.PersonalDetails.surName}</p>
      </div>
    );
  }
}



const MyQuery = gql`query MyQuery {
    PersonalDetails(id: "ciw5wyvzxjrj60164fgq12c10"){
        firstName,
        surName
        
    }
}`;


const MyComponentWithData = graphql(MyQuery)(App);
export default MyComponentWithData;
