// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
/*import logo from './logo.svg';*/
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from  './componentes/Header';
import items from './componentes/Menu';
import MenuBar from './componentes/MenuBar';
import Content from './componentes/Content';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };


  render() {
    const { children } = this.props;
  return (
    <div className="App">
    <Header title="Examen 1" items={items} />
    <MenuBar/>
    <section>
    <Content body={children} />
    </section>
    </div>
  );
}
}

export default App;
