import React, { Component } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

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
          pictureURL: API_BASE_URL + "/public/pictures/" + pictureName,
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
              <img
                className="letter-picture"
                src={ pictureURL }
                alt=""
              />
            </div>
          }
           <div className="cookie">
            
            <CookieConsent
          onAccept={() => {
            alert("yay!");
          }}
          enableDeclineButton
          declineButtonText="Decline (optional)"
          onDecline={() => {
            alert("Если Вы не согласны - немендленно покиньте этот сайт!");
          }}
        >
          Мой сайт использует для улучшения качества файлы куки. Если Вы не согласны - немендленно покиньте этот сайт!{" "}
          <span style={{ fontSize: "10px" }}>
            This bit of text is smaller :O
          </span>
        </CookieConsent>
            
            </div>

        </div>
      </div>
    );
  }
}

export default Letter;