import React, { Component } from "react";
import "./Footer.css";
import loadable from '@loadable/component'
const IsAb = loadable(() => import('./IsAb'));
const NotAb = loadable(() => import('./NotAb'));

class Footer extends Component {
  render() {
    const { isAbout } = this.props;
    return(
      <div className="footer-div">
        <span onClick={ this.props.showAbout }>
          { isAbout ? <NotAb /> : <IsAb /> } 
        </span>
      </div>
    );
  }
};


export default Footer;