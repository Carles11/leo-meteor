
import React from 'react'
import Scrollchor from 'react-scrollchor'
import BurgerMenu from './BurgerMenu'
//import { slide as Menu } from 'react-burger-menu'

export default class NavBarComp extends React.Component{
constructor(){
	super()
	this.state = {
		display:'',
		transform: 'scale(0)'
	}
	this.handleTok = this.handleTok.bind(this)
	this.handleTak = this.handleTak.bind(this)

}
handlePage(){
	this.props.history.push('/')
}
handleClick(){
		
	this.props.history.push('/admin')
	//this.props.selectPage(e.target.name)
}
componentWillMount(){  
    if(!Meteor.userId()) {              
        this.setState({display:'none'})
    }else{ 
        this.setState({display:'block'})
    }
}
handleClack(){	
   var that = this
    Meteor.logout((err)=>{
    	if(!err){
    		alert('Hasta pronto!')
    		if(!Meteor.userId()) {
                debugger
                this.setState({display:'none'})
            }else if(Meteor.userId()){ 
                this.setState({display:'block'})
            } 
            //window.location.reload()
            //this.props.history.push('/')
    	}
    })
}
handleTok(){
 	if(this.state.transform == 'scale(1)'){
 		this.setState({transform:"scale(0)"})
 	}else{
 		this.setState({transform:"scale(1)"})
 	}
}
handleTak(){
 	
 	this.setState({transform:"scale(0)"})
 }
	render(){
		let style ={ 
			display: this.state.display,
			textAlign: 'right'
		}
		let burger ={
		 	transform:this.state.transform
		}
		return(
			<div>
			<BurgerMenu 
				scale = {this.handleTok}
				/>
			<div 
				style = {burger}
				className= 'navbar_font navigation_grid navigation_dropdown mouse_over'>
				      <div 
				      	className='padding_bottom_mob padding_top_mob'
				      	onClick= {this.handleTak.bind(this)}><Scrollchor to="" className="nav-link mouse_over white">HOME</Scrollchor></div>
				      <div 
				      	className='padding_bottom_mob '
				      	onClick= {this.handleTak.bind(this)}><Scrollchor to="#concurso" animate={{offset: 20, duration: 400}} className="nav-link white">CONCURSO</Scrollchor></div>
				      <div 
				      	className='padding_bottom_mob '
				      	onClick= {this.handleTak.bind(this)}><Scrollchor to="#galeria" animate={{offset: 20, duration: 400}} className="nav-link white">GALERÍA</Scrollchor></div>
				      <div 
				      	className='padding_bottom_mob '
				      	onClick= {this.handleTak.bind(this)}><Scrollchor to="#registro" animate={{offset: 20, duration: 400}} className="nav-link white">REGISTRO</Scrollchor></div>
				      <div 
				      	className='margin'
				      	style = {style}>
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




// export default class NavBarComp extends React.Component {
//     selectPage = e => {
    	
//             this.props.changePage(e.target.textContent)
//     }

//     render(){
//     	let style ={
//     		display:this.props.display
//     	}
    	
//         return(
//         	<div style={style}
//                  className = "navigation_grid display_inline">

//                 <div 
//                     onClick = {this.selectPage.bind(this)}
//                     className="padding_sides">HOME</div>
//                 <div 
//                     onClick = {this.selectPage.bind(this)}
//                     className="padding_sides">EL CONCURSO</div>
//                	<div 
//                     onClick = {this.selectPage.bind(this)}
//                     className="padding_sides">GALERÍA</div>
//                 <div 
//                     onClick = {this.selectPage.bind(this)}
//                     className="padding_sides">PARTICIPA</div>
//                 <div 
//                     onClick = {this.selectPage.bind(this)}
//                     className="padding_sides">ADMIN</div>
//             </div>

//         )
//     }

// }

//DROPDOWN MENU OLD ONE
// <div className= 'navigation_dropdown'>
// 	    <div className="ui compact menu">
// 			<div className="ui simple dropdown item">
// 			    MENÚ
// 			    <i className="dropdown icon"></i>
// 			    <div className="menu">
// 			      <div className="item">HOME</div>
// 			      <div className="item">CONCURSO</div>
// 			      <div className="item">GALERÍA</div>
// 			      <div className="item">PARTICIPA</div>
// 			      <div className="item">ADMIN</div>  
// 				</div>
// 			</div>
// 		</div>
// 		</div>
