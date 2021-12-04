import React, { Component } from "react";
import {FormattedMessage } from 'react-intl';
import { cn } from '@bem-react/classname'

import "./AsyncLoader.css";

const loader = cn('Loader');


class AsyncLoader extends Component {
    render() {

        return(
            <div className={ loader() }>
<FormattedMessage id="loader.first"
                      defaultMessage="Если загрузка происходит долго - ПЕРЕЗАГРУЗИТЕ страницу"
                      description="Если загрузка происходит долго - ПЕРЕЗАГРУЗИТЕ страницу"
                     classame={ loader('first') }/>
                <hr/>
<FormattedMessage id="loader.second"
                      defaultMessage="Упс... Требуется немного подождать. Мы уже получили все статьи и выставляем их для Вас."
                      description="Упс... Требуется немного подождать. Мы уже получили все статьи и выставляем их для Вас."
                      classame={ loader('second') }
                      />

            </div>
        );
    }
}

export default AsyncLoader;
