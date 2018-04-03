import React from 'react'
import InputContData from './InputContData'
import InputContTitle from './InputContTitle'
import ButtonsContacto from './ButtonsContacto'

//import { Dropdown, Menu } from 'semantic-ui-react'
//import DropdownYear from './DropdownYear'

export default class FormContacto extends React.Component{
	constructor(){
		super()
		this.state= {
		}
		this.onClick = this.onClick.bind(this)
		this.onChange = this.onChange.bind(this)
	}
	onChange(name, val){
		this.setState({[name]:val},()=>{
			console.log(this.state)
		})

	}
	onClick(){
		Meteor.call(
		  'sendEmail',
		  this.state.email,
		  this.state.contactperson,
		  this.state.text,
		  this.state.telefon
		)
	 }
	
	render(){
		return(
		
		    <div className="zoom_minus">
		        <p className='p_form'>DEJA TU MENSAJE</p>
		        <InputContTitle 
		        	onChange={this.onChange}/>
		        <InputContData 
		        	onChange={this.onChange}/>
		        <ButtonsContacto
		        	onClick={this.onClick}
		        	closePopup={this.props.closePopup}
		        	 />
		    </div>
		)
	}
}