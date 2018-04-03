import React from 'react'

export default class BurgerMenu extends React.Component{
	
	handleClick(){
	 	this.props.scale()
	 }
	render(){
		return(
			<div
				// style = {style}
				onClick  = {this.handleClick.bind(this)} 
				className= "mainBurger navigation_dropdown">
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
