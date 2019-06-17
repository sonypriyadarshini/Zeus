import React, { Component } from 'react';
import "../css_styles/merchandising.css";
import Cards from '../items/cards';
import JenkinsLogo from '../resources/images/jenkinsLogo1.png'
import ConfluenceLogo from '../resources/images/confluencelogo.png'
import JiraLogo from '../resources/images/jiralogo1.png'
import TestrailLogo from '../resources/images/testRaillogo.jpg'

class Merchandising extends Component {

  render() {
    return (
      <div className="App">
        <h3 className="merchTitle">Merchandising Updates</h3>
        <span className="cardLayout">
          <Cards
            headerText='Confluence'
            descriptionText='Click on this card to see QA documents available in Confluence'
            navigationUrl='https://29022131.atlassian.net/wiki/spaces/ENG/pages/1047697480/QA+Merchandising+Updates'
            headerImage={ConfluenceLogo}
            Cards />
          <Cards
            headerText='Jenkins'
            descriptionText='Click to know details of all automation and performace jobs on Jenkins'
            navigationUrl='http://172.24.245.202/jenkins/view/Merchandising/'
            headerImage={JenkinsLogo}
            Cards />
          <Cards
            headerText='Jira'
            descriptionText='Click this card to view all bugs and tasks logged in Jira'
            navigationUrl='https://29022131.atlassian.net/secure/Dashboard.jspa?selectPageId=11487'
            headerImage={JiraLogo}
            Cards />
          <Cards
            headerText='TestRail'
            descriptionText='Click to find all the Test cases and test run reports on TestRail'
            navigationUrl='https://traveloka.testrail.net/index.php?/projects/overview/55'
            headerImage={TestrailLogo}
            Cards />
        </span>
      </div>
    );
  }
}
export default Merchandising;
