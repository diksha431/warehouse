import React, { Component } from 'react'; 
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import Page1 from './Page1';
import P2 from './P2';
import P3 from './P3';

class Routing extends Component 
{ 
    render() { 
	    return ( 
	        <Router> 
		        <div> 
			        <Switch> 
                        <Route exact path='/Page1' component={Page1}></Route> 
			            <Route exact path='/P2' component={P2}></Route> 
			            <Route exact path='/P3' component={P3}></Route> 
			            
                    </Switch> 
		        </div> 
	        </Router> 
        ); 
    } 
} 

export default Routing; 
