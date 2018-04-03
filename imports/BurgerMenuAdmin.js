import React from 'react'

export default class BurgerMenuAdmin extends React.Component{

	handleClick(){
	 	this.props.adminScale()
	 }
	render(){
		return(
			<div
				// style = {style}
				onClick  = {this.handleClick.bind(this)} 
				className= "mainBurger navigation_dropdown_admin">
					<div 
						className="burger"></div>
					<div 
						className="burger"></div>
					<div 
						className="burger"></div>
			</div>
		)
	}
}