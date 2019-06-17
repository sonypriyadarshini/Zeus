import React, { Component } from 'react';
import "../css_styles/cards.css";
import { Link } from 'react-router-dom';

class cards extends Component {

  // handleClick() {
  //         window.location.assign('https://29022131.atlassian.net/wiki/spaces/ENG/pages/1047697480/QA+Merchandising+Updates');
  //       }

  render() {
    return (
      <span className="random">
        <a className="ui card" href={this.props.navigationUrl}>
          <div className="content">
            <img class="imagelogo" src={this.props.headerImage} width="10em" height="10em" />
            {/* <div className="header">{this.props.headerText}</div> */}
            <div className="meta">
              <span className="category"></span>
            </div>
            <div className="description">
              <p>{this.props.descriptionText}</p>
            </div>
          </div>
          <div className="extra content">
            {/* <img className="ui avatar image" src=""> Matt></img> */}
            <a href="https://29022131.atlassian.net/wiki/spaces/ENG/pages/1047697480/QA+Merchandising+Updates">click here to see the content here</a>
          </div>
        </a>

      </span>

      // <div>
      //     <span className="cardButtons">
      //       <Button className = "buttonClass" variant="primary" size="lg"  onClick={this.handleClick.bind(this)}>Confluence-Updates</Button>
      //       <Button className = "buttonClass" variant="primary" size="lg"  onClick={this.handleClick.bind(this)}>Jenkins Jobs</Button>
      //       <Button className = "buttonClass" variant="primary" size="lg"  onClick={this.handleClick.bind(this)}>Jira-Bugs Dashboard</Button>
      //     </span>
      //   </div>

    );
  }
}
export default cards;
