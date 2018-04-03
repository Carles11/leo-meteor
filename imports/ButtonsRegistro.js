import React from 'react'

export default class ButtonRegistro extends React.Component{
	handleClick(){
		this.props.handleSubmit()
	}
	render(){
		return(
			<div className='padding_top_buttons'>
                <button className='save_button' onClick={this.handleClick.bind(this)}>REGISTRAR</button>
                <button className='discard_button' onClick={this.props.closePopup}>CANCELAR</button>
            </div>
		)
	}
}