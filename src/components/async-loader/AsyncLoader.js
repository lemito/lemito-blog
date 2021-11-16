import React, { Component } from "react";

import "./AsyncLoader.css";


class AsyncLoader extends Component {

    render() {
        return(
            <div className="loader">
                Упс... Требуется немного подождать. Мы уже получили все статьи и выставляем их для Вас.
                <hr/>
                Если загрузка происходит долго - ПЕРЕЗАГРУЗИТЕ страницу
            </div>
        );
    }
}

export default AsyncLoader;
