import React from 'react'
import ButtonsContacto from './ButtonsContacto'

export default class InputContTitle extends React.Component{
	handleChange(e){
		this.props.onChange(e.target.id, e.target.value)
	}
	render(){
		return(
        	<div className='padding_top_input'>
	            <span className= 'label '>Mensaje</span><br />
	            <textarea
	            	id = "text"
					required="required"
	            	onChange= {this.handleChange.bind(this)} 
	            	className='longtext_input_field'/><br />
	        </div>
		)
	}
}

			// <div>
	  //           <span className= 'label'>Título</span><br />
	  //           <input 
	  //           	onChange={this.onChange.bind(this)}
	  //               className='input_field'/><br />
   //      	</div>