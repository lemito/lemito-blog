import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider} from "react-intl";
import './index.css';
import App from './components/app/App';
import {Helmet, HelmetProvider} from "react-helmet-async";
import * as serviceWorker from './serviceWorker';
import messages_ru from "./locales/ru.json";
import messages_en from "./locales/en.json";
// TODO: Chinese translation
const messages = {
    'ru': messages_ru,
    'en': messages_en
};
var a=window.navigator?window.navigator.language||window.navigator.systemLanguage||window.navigator.g:"en";a=a.substr(0,2).toLowerCase();console.log(a);
ReactDOM.render(
    <HelmetProvider>
<React.StrictMode>    
<Helmet
titleTemplate="lemito - %s"
defaultTitle="lemito"
>
<html lang={a}  />
</Helmet>
     <IntlProvider locale={a} messages={messages[a]}>
        <App/>
    </IntlProvider>
</React.StrictMode> </HelmetProvider>
, document.getElementById('root'));
serviceWorker.unregister();
/* Tip: For translation you can use BabelEdit */