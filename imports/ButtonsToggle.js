import React from 'react'
import FormPopUp from './FormPopUp'
import FormPopUpCont from './FormPopUpCont'

export default class ButtonsToggle extends React.Component{
	render(){
		return(
			<div className= 'contacto_grid section_height_registro background_pic_dark'>
                <div className="center">
                    <button 
                        className="register_button"
                        onClick={this.props.toggle}>INSCRIPCIÓN</button>
                	{this.props.showPopup ? 
                    <FormPopUp
                    closePopup={this.props.toggle}
                    handleSubmit ={this.props.handleSubmit}
                    handleChange = {this.props.handleChange}
                    />
		          : null
		        }
                </div>
              	<div className="center">
                    <button 
                        className="contact_button"
                        onClick={this.props.toggle2}>CONTÁCTANOS</button>
                	{this.props.showPopup2 ? 
                    <FormPopUpCont
                    	closePopup={this.props.toggle2}
                    />
		          : null
		        } 
                </div>
                
              
            </div>
		)
	}
}
