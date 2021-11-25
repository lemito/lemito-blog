import React, { Component } from "react";

import "./AsyncLoader.css";
import { useTranslation, withTranslation, Trans } from 'react-i18next';

class AsyncLoader extends Component {
    render() {
        return(
            <div className="loader">
                <Trans i18nKey="loader.first">Упс... Что-то слишком долго грузит...</Trans>
                <hr/>
                <Trans i18nKey="loader.second">P.S. Перезагрузите страницу и примите правила о cookie-файлах</Trans>
            </div>
        );
    }
}

export default AsyncLoader;
