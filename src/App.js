import logo from './logo.svg';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import Certificate from './Certificate';
import Placement from './Placement';
import Syllabus from './Syllabus';
import Projects from './Projects';
import Teachers from './Teachers';
import Reviews from './Reviews';
import Nav from './Nav';
import {Switch,Route,Redirect} from 'react-router-dom';
                                                                   

const App= () =>{
  return (
    <>
       <Nav/>
       <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/Certificate' component={Certificate}/>
          <Route exact path='/Placement' component={Placement}/>
          <Route exact path='/Syllabus' component={Syllabus}/>
          <Route exact path='/Projects' component={Projects}/>
          <Route exact path='/Teachers' component={Teachers}/>
          <Route exactpath='/Reviews' component={Reviews}/>
          <Redirect to='/'/>
       </Switch>
    </>
     );
}

export default App;
