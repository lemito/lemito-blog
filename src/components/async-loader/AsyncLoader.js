import React, { Component } from "react";
import {FormattedMessage } from 'react-intl';
import {FormattedHTMLMessage} from 'react-intl';

import "./AsyncLoader.css";



class AsyncLoader extends Component {
    render() {

        return(
            <div className="loader">
<FormattedMessage id="loader.first"
                      defaultMessage="Если загрузка происходит долго - ПЕРЕЗАГРУЗИТЕ страницу"
                      description="Если загрузка происходит долго - ПЕРЕЗАГРУЗИТЕ страницу"
                     />
                <hr/>
<FormattedMessage id="loader.second"
                      defaultMessage="Упс... Требуется немного подождать. Мы уже получили все статьи и выставляем их для Вас."
                      description="Упс... Требуется немного подождать. Мы уже получили все статьи и выставляем их для Вас."/>
            </div>
        );
    }
}

export default AsyncLoader;
