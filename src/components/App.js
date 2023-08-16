import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import reactRouter from './R89_router';
import reactRouter2 from './R89_router2';

import '../css/new.css';
import Header from './Header/Header admin';
import Footer from './Footer/Footer';

class App extends Component {
  render(){
    return (
      <div>
        <Header/>
        <Route exact path='/' component={reactRouter}/>
        <Route exact path='/reactRouter2' component={reactRouter2}/>
        <Footer/>
      </div>
    );
  }  
}

export default App;