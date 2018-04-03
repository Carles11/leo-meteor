import React from 'react'

export default class InputRegYear extends React.Component {
	handleChange(e){
		this.props.handleChange(e.target.id, e.target.value)
	}
	render(){
		return(
			<div>
				<div className='padding_top_input'>
		            <span className= 'label '>Persona de contacto</span><br />
		            <input 
		            	id= 'contactperson'
				required="required"
		           	onChange= {this.handleChange.bind(this)}
		                className='input_field'/><br />
		        </div>
				<div className='padding_top_input'>
		            <span className= 'label '>Quiero registrarme para la edición:</span><br />
		            <input 
		            	id= 'year'
				required="required"
		            	onChange= {this.handleChange.bind(this)}
		                className='input_field'/><br />
		        </div>	        
			</div>
		)
	}
}