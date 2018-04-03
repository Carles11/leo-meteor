import React from 'react'
import FormContacto from './FormContacto'

export default class FormPopUpCont extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <p className='title_form'>Formulario de contacto</p>
          <FormContacto 
          	closePopup={this.props.closePopup}/>
        </div>
      </div>
    );
  }
}


