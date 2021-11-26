import React, { Component } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";
import {FormattedMessage } from 'react-intl';
import AsyncLoader from "../../async-loader/AsyncLoader";
import LetterDate from "../letter-date/LetterDate";

import { getPublicLetterById } from "../../../util/api";
import { API_BASE_URL } from "../../../util/const";

import "./Letter.css";


class Letter extends Component {

  state = {
    id: -1,
    title: "",
    dateOfPublication: 0,
    htmlText: "",
    pictureURL: "",
    isLoading: true
  }

  componentDidMount = async () => {
    await getPublicLetterById(parseInt(this.props.match.params.id))
      .then(response => {
        const { id, title, dateOfPublication, htmlText, pictureName } = response.data;
        this.setState({
          id: id,
          title: title,
          dateOfPublication: dateOfPublication,
          htmlText: htmlText,
      //    pictureURL: API_BASE_URL + "/public/pictures/" + pictureName,
          isLoading: false
        });
      });
  }

  render() {

    const { title, dateOfPublication, htmlText, pictureURL, isLoading } = this.state;
    
    return(
      <div className="background-letter-div">
        <div className="letter-div animated">
          {isLoading ? <AsyncLoader /> : 
            <div>
              <div className="letter-title-div">
                { title }
              </div>
              <LetterDate date={ dateOfPublication } />
              <div className="html-text" dangerouslySetInnerHTML={ {__html: htmlText} } />
        {/*      <img
                className="letter-picture"
                src={ pictureURL }
                alt=""
        />    */}
            </div>
          }
           <div className="cookie">
            
            <CookieConsent
          onAccept={() => {
            alert("yay!");
          }}
          debug={false}
          enableDeclineButton
          acceptOnScroll={true}
          declineButtonText="Decline (optional)"
          onDecline={() => {
            alert(<FormattedMessage id="cookie.onDecline" defaultMessage="Если Вы не согласны - немендленно покиньте этот сайт!" default="Текст того, что вылезает если не согласиться с куки" />); // "Если Вы не согласны - немендленно покиньте этот сайт!"
          }}
        >
          <FormattedMessage id="cookie.first" defaultMessage="Мой сайт использует для улучшения качества файлы куки. Если Вы не согласны - немендленно покиньте этот сайт!" description="Сообщение банера куки" /> {" "}
          <span style={{ fontSize: "10px" }}>
          <FormattedMessage id="cookie.egg" defaultMessage="Без Вашего подтверждения сайт будет грузиться БЕСКОНЕЧНО :O" description="Какая-то паскахлка. Зачем - не ясно." />
          {/* TODO: А нужна ли пасхалка? */}
          </span>
        </CookieConsent>
            
            </div>

        </div>
      </div>
    );
  }
}

export default Letter;
