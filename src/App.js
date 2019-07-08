import React from 'react';
import {withRouter, Route, Switch} from 'react-router-dom'

import './App.css';
import Nav from './containers/Nav'
import Main from './containers/main'
import Resume from './components/Resume'
import ProjectsExplore from './containers/ProjectsExplore';

class App extends React.Component {
  render(){
    console.log(this.props);
    
    return (
      <div className="portfolio">
        <Nav />
  
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route exact path='/Resume' component={Resume}/>
          <Route exact path='/Projects' component={ProjectsExplore}/>
          {/* <Route path='/' component={Main}/> */}
        </Switch>
  
      </div>
    );
  }
}

export default withRouter(App);
