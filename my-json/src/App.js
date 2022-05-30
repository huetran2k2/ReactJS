import React, { Component } from 'react';
import Header from './Component/Header/Header';
// import Left from './Component/Content/Left/Left';
// import { Product } from './Component/Content/content';
import Crud from './Component/Content/content';

import {Routes, Route} from "react-router-dom"
import Home from './Component/Home/Home';
class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="container-header">
         <Header></Header>
        </div>
        <Routes>
          <Route path='/' element ={<Home></Home>}/>
          <Route path='/admin' element ={<Crud></Crud>}/>
        </Routes>
      </div>
    );
  }
}

export default App;