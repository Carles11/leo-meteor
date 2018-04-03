import React from 'react'
import InputRegName from './InputRegName'
import InputRegData from './InputRegData'
import InputRegYear from './InputRegYear'
import InputRegLog from './InputRegLog'
import ButtonsRegistro from './ButtonsRegistro'

export default class FormRegistro extends React.Component{
	constructor(){
		super()
		this.state = { }
		
	}
	render(){
		return(
			<span className="zoom_minus">
	        <p className='p_form'>REGISTRA TU ESCUELA</p>
				<InputRegName handleChange={this.props.handleChange}/>
				<InputRegData handleChange={this.props.handleChange}/>
				<InputRegYear handleChange={this.props.handleChange}/>
				<InputRegLog  handleChange={this.props.handleChange}/>
				<ButtonsRegistro 
                    handleSubmit={this.props.handleSubmit}
                    closePopup={this.props.closePopup}/>
			</span>
		)
	}
}