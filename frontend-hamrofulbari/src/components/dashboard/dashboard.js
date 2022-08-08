import React, { Component } from 'react';
// import {Route,NavLink} from 'react-router-dom';
import DashMainBody from './dashboardbody';
import DashHeader from './dashheader';

class DashBody extends Component{
  
render(){
    return(
      <div>
          <DashHeader/>
          <DashMainBody/>
      </div>    
    );
  }
}
export default DashBody;