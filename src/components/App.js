import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import reactRouter from './R89_router';
import reactRouter2 from './R89_router2';

class App extends Component {
  render(){
    return (
      <div>
        <Route exact path='/' component={reactRouter}/>
        <Route exact path='/reactRouter2' component={reactRouter2}/>
      </div>
    );
  }  
}

export default App;