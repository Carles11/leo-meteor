import React from 'react'
import ButtonsContacto from './ButtonsContacto'

export default class InputContData extends React.Component{
	onChange(e){
		this.props.onChange(e.target.id, e.target.value)
	}
	render(){
		return(
			<span>
				<div className='padding_top_input'>
	            <span className= 'label'>Persona de contacto</span><br />
	            <input 
	                id='contactperson'
					required="required"
	                onChange= {this.onChange.bind(this)}
	                className='input_field'/><br />
	        	</div>
	       		<div className='padding_top_input'>
	            <span className= 'label'>Teléfono</span><br />
	            <input 
	                id='telefon'
	                onChange= {this.onChange.bind(this)} 
	                className='input_field'/><br />
	        	</div>
	        	<div className='padding_top_input'>
	            <span className= 'label'>E-mail</span><br />
	            <input 
	                id='email'
					required="required"
	                onChange= {this.onChange.bind(this)}
	                className='input_field'/><br />
	        	</div>
	        </span>
		)
	}
}