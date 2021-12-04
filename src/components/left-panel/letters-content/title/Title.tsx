import React, { Component } from "react";

import "./Title.css";


class Title extends Component {
	public props: any;
	public id: any;
	public title: any;
	public state: any;
	public isSelected: any;
	public handleTitleSelect: any;

  render() {

    const { id, title, state, isSelected, handleTitleSelect } = this.props;

    let defaultClassName = "title-div";
    if(state === "DRAFT") {
      defaultClassName = "draft-title";
    } else if(id === -100) {
      defaultClassName = "new-letter-title";
    }

    return(
      <div 
        className={ isSelected ? "selected-title-div" : defaultClassName }  
        onClick={ () => handleTitleSelect(this.props) }>
        
          { title }
        
      </div>
    );
  }
}

export default Title;