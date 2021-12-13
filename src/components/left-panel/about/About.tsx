import React, { Component } from "react";
import 'classnames';
import TelegramIcon from "../../icons/telegram-icon/TelegramIcon";
import GitIcon from "../../icons/git-icon/GitIcon";
import {cn} from '@bem-react/classname'
import "./About.css";
import {FormattedMessage} from 'react-intl';

const aboutcn = cn('inner-html');

class About extends Component {

  render() {
    return(
      <div className="about-div animated">
        <div className={aboutcn()}>
         <p ><FormattedMessage id='about' defaultMessage='Я - lemit' description="Я - lemit" /></p>
        </div>
        <div className="contacts-div">
          <div className="contact-div">
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
              <TelegramIcon />
            </a>
            author
          </div>
          <div className="contact-div">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <GitIcon />
            </a>
            sorce
          </div>
        </div>
      </div>
    );
  }
}


export default About;