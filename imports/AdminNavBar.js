import React from 'react'
import BurgerMenuAdmin from './BurgerMenuAdmin'

export default class AdminNavBar extends React.Component{
constructor(){
	super()
	this.state = {
		display:'',
		transform: 'scale(0)'
	}
	this.handleTak = this.handleTak.bind(this)
}
handlePage(){
	this.props.history.push('/')
}
handleClick(){	
	this.props.history.push('/admin')
}
handleClack(){	
	var that = this
    Meteor.logout((err)=>{
    	if(!err){
    		alert('Hasta pronto!')
    		this.props.history.push('/')
    	}
    })
}
handleTak(){	
 	if(this.state.transform == 'scale(1)'){
 		this.setState({transform:"scale(0)"})
 	}else{
 		this.setState({transform:"scale(1)"})
 	}
}
	render(){
		let style ={
			display: this.props.display,
			textAlign: 'right'
		}
		let burger ={
		 	transform:this.state.transform
		}		
		return(
			<div>
				<BurgerMenuAdmin 
					adminScale= {this.handleTak.bind(this)}/>
			    <div 
			    	style = {burger}
			    	className="navigation_grid_admin mouse_over">
				      <div 
						className='admin_padding_top_mob'
				      	onClick={this.handlePage.bind(this)}>HOME</div>
				      <div style = {style}>
					      <div 
					      	className='margin'
					      	onClick={this.handleClick.bind(this)}>Admin</div>
						  <div 
						  	className='margin'
						  	onClick={this.handleClack.bind(this)}>LogOut</div>
					  </div>
			  	</div> 
			</div>
		)
	}
}