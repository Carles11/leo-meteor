import React from 'react'
import FormRegistro from './FormRegistro'

export default class FormPopUp extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <p className='title_form'>Formulario de inscripción</p>
          <FormRegistro 
            handleSubmit={this.props.handleSubmit}
            closePopup={this.props.closePopup} 
            handleChange = {this.props.handleChange}
/>
        </div>
      </div>
    );
  }
}