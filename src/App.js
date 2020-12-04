import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from './Component/Home';

import About from './Component/About';
import Header from './Component/Header';
import Login from './Component/Login';
import PageNotFound from './Component/PageNotFound';
import Footer from './Component/Footer';
import DetailProduct from './Component/DetailProduct';
import TypeProduct from './Component/TypeProduct';
import Contact from './Component/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} /> 
          <Route exact path="/login" component={Login} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/chiTietSanPham" component={DetailProduct} />
          <Route exact path="/:type" component={TypeProduct} />
          <Route exact path='*' component={PageNotFound} />
        </Switch>
        <Footer />
      </BrowserRouter> 
    </div>
  );
}

export default App;
