import React, { Component } from "react";
import {FormattedMessage } from 'react-intl';

class IsAb extends Component {
  render() {
    return (
      <FormattedMessage id="b-about" defaultMessage="Обо мне" description="обо мне" />
    );
  }
};

export default IsAb;