import React ,{Component}from 'react';
// import '../App';
import "../css_styles/merchandising.css";
import Cards from '../items/cards';

class Merchandising extends Component{

 render() {
  return (
    
     <div className="App">
    <h3 className="merchTitle">Merchandising Updates</h3>
    <span className="cardLayout">
    <Cards 
    headerText = 'Confluence' 
    descriptionText='description of Confluence: Find all project requirement docs on confluence'
    navigationUrl='https://29022131.atlassian.net/wiki/spaces/ENG/pages/1047697480/QA+Merchandising+Updates'
    Cards/>
    <Cards 
    headerText = 'Jenkins' 
    descriptionText='description of Jenkins: Find all project requirement docs on confluence'
    navigationUrl='http://172.24.245.202/jenkins/view/Merchandising/'
    Cards/>
    <Cards 
    headerText = 'Jira' 
    descriptionText='description of Jira: Find all project requirement docs on confluence'
    navigationUrl='https://29022131.atlassian.net/secure/Dashboard.jspa?selectPageId=11487'
    Cards/>
    <Cards 
    headerText = 'TestRails' 
    descriptionText='description of TestRails: Find all project requirement docs on confluence'
    navigationUrl='https://traveloka.testrail.net/index.php?/projects/overview/55'
    Cards/>
    </span>
  </div>
  );
}
}
export default Merchandising;
