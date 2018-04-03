import React from 'react'

export default class ButtonsContacto extends React.Component{
	handleClick(){
		this.props.onClick()
		alert('Su mensaje se ha enviado correctamente. En breve recibirá una respuesta.')
		this.props.closePopup()
	}
	render(){
		return(
			<div className='padding_top_buttons'>
                <button className='save_button' onClick={this.handleClick.bind(this)}>ENVIAR</button>
                <button className='discard_button' onClick={this.props.closePopup}>CANCELAR</button>
            </div>
		)
	}
}