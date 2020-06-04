import React, {Component} from 'react';
import Response from './Response';
import Form from './Form';

class TelaForm extends Component {
  render() {
    return (
      <div className="CadScreen">
        <Form />
        <Response />
      </div>
    );
  }
}

export default TelaForm;