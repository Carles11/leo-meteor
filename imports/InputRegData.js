import React from 'react'

export default class InputRegData extends React.Component {
	handleChange(e){
		this.props.handleChange(e.target.id, e.target.value)
	}
	render(){
		return(
			<div>
					
		        <div className='padding_top_input'>
		            <span className= 'label '>Teléfono</span><br />
		            <input 
		                id='telefon'
		                onChange= {this.handleChange.bind(this)}
		                className='input_field'/><br />
		        </div>
		        <div className='padding_top_input'>
		            <span className= 'label '>Dirección</span><br />
		            <textarea 
		                id='address'
		                onChange= {this.handleChange.bind(this)}
		                className='input_field'/><br />
		        </div>
		    </div>
    	)
    }
}