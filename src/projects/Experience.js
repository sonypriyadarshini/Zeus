import React ,{Component}from 'react';
import '../App';
import Cards from '../items/cards';
// import Contacts from './contacts';
// import "../css_styles/projectpage.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Experience extends Component{

 render() {

  return (
     <div className="App">
    <h3 className="Title">Experience Updates</h3>
    <Cards/>

    {/* <ul>
        <li>
    <a className="urls" href="https://29022131.atlassian.net/wiki/spaces/ENG/pages/1047697480/QA+Merchandising+Updates">
        Confluence
      </a></li>
      <li> <a className="urls" href="https://29022131.atlassian.net/wiki/spaces/ENG/pages/1047697480/QA+Merchandising+Updates">
         Bugs Dashboard
      </a></li>
      <li><a className="urls" href="https://29022131.atlassian.net/wiki/spaces/ENG/pages/1047697480/QA+Merchandising+Updates">
         Jenkins Job
      </a></li>
      </ul> */}
  </div>
   
  );
}
}
export default Experience;
