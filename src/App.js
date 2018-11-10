import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'reactstrap';
import AppNavbar from './Components/AppNavbar';
import TodoItem from './Components/TodoItem';
import {Provider} from 'react-redux';
import store from './Store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>

      <div className="App">
        <AppNavbar/> 
        <Container>
          <TodoItem/> 
        </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
