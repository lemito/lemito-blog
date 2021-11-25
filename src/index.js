import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from "react-intl";
import './index.css';
import App from './components/app/App';
import {Helmet} from "react-helmet";

import * as serviceWorker from './serviceWorker';
import messages_ru from "./locales/ru.json";
import messages_en from "./locales/en.json";
// TODO: Chinese translation
const messages = {
    'ru': messages_ru,
    'en': messages_en
};
var language = navigator.language || navigator.userLanguage; 


ReactDOM.render(<React.StrictMode>
<Helmet
titleTemplate="lemito - %s"
defaultTitle="lemito"
>
<html lang={language}  />

</Helmet>
     <IntlProvider locale={language} messages={messages[language]}>
        <App/>
    </IntlProvider>
</React.StrictMode>, document.getElementById('root'));


serviceWorker.unregister();

/* Tip: For translation you can use BabelEdit */