import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home/index'
import Listado from './Listado/index'
import Ficha from './Ficha/index'
import CheckOut from './CheckOut/index'
import './App.css';


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      <Router>
        <Route path='/' exact component={Home}></Route>
        <Route path='/listado-de-producto' exact component={Listado}></Route>
        <Route path='/ficha-de-producto/:id' exact component={Ficha}></Route>
        <Route path='/checkout' exact component={CheckOut}></Route>
      </Router>
      </React.Fragment>
    )
  }
}
  
export default App;
