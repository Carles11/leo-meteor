import React from 'react'

export default class InputRegLog extends React.Component {
    handleChange(e){
        this.props.handleChange(e.target.id, e.target.value)
    }
	render(){
		return(
            <div>
        		<div className='padding_top_input'>
                    <span className= 'label '>Introduce tu email:</span><br />
                    <input 
                        id= 'email'
                        required="required"
                        onChange= {this.handleChange.bind(this)}
                        className='input_field'/><br />
                </div> 

          </div>  
        )
    }
}

               

                
                 
                 // <div className='padding_top_less'>
                //     <span className= 'label '>Repite tu contraseña:</span><br />
                //     <input 
                //         className='input_field'/><br />
                // </div>
                // <div className='padding_top_input'>
                //     <span className= 'label '>Introduce una contraseña:</span><br />
                //     <input 
                //         id= 'password'
                //         onChange= {this.handleChange.bind(this)}
                //         className='input_field'/><br />
                // </div> 
