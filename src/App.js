import './App.css';
import React, { Component } from 'react';
import NavBar from './components/navBar';
import {Route,Switch,Redirect} from 'react-router-dom';
import PortFolio from './components/portfolio';
import Certification from './components/certification';
import NotFound from './components/notFound';
import HomePage from './components/homePage';
import Hobbies from './components/hobbies';

class App extends Component {
  state = {  }
  componentDidMount() {
    document.body.style.backgroundColor = "black";
}
  render() { 
    return (
      <React.Fragment>
        <NavBar />
        <main >
      
      <Switch>
        <Route path='/homePage'  component={HomePage}/>
        <Route path='/portfolio'  component={PortFolio} />
        <Route path='/hobbies'   component={Hobbies}/>
        <Route path='/certification'  component={Certification}/>
        <Route path='/notFound' component={NotFound} />
        <Redirect from="/"  to='/homePage'/>
      </Switch>
     
    </main>
    </React.Fragment>
    );
    
  }
}
 
export default App;
