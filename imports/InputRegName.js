import React from 'react'

export default class InputRegName extends React.Component {
	handleChange(e){
		this.props.handleChange(e.target.id, e.target.value)
	}
	render(){
		return(
		<div>
	        <div>
	            <span className= 'label'>Nombre de la escuela</span><br />
	            <input 
	                id='user' 
					required="required"
	                onChange= {this.handleChange.bind(this)}
	                className='input_field'/><br />
	        </div>
	        <div className='padding_top_input'>
	            <span className= 'label '>Clase</span><br />
	            <input 
	                id='classe' 
	                onChange= {this.handleChange.bind(this)}
	                className='input_field'/><br />
	        </div>
	    </div>
		)
	}



}