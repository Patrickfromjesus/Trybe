import React, { Component } from "react";
import PropTypes from 'prop-types';

class ValidationForm extends Component {
  render() {
    const { email } = this.props;
    let validation = false;
    if (email.includes('@') && email.includes('.com')) validation = true
    const validationEmail = validation ? <h3>Email válido</h3>
      : <h3>Email inválido!</h3>
    return (
      <div>
        <h2 data-testid="email-show">{ email }</h2>
        { validationEmail }
      </div>
    );
  }
}

ValidationForm.propTypes = {
  email: PropTypes.string.isRequired,
}

export default ValidationForm;
