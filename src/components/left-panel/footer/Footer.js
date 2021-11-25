import React, { Component } from "react";
import "./Footer.css";
import IsAb from './IsAb';
import NotAb from './NotAb';

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