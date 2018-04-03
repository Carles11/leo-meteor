import React from 'react'
import { Meteor } from 'meteor/meteor'
import AdminNavBar from './AdminNavBar'
import MessageGeneric from './MessageGeneric'

export default class LogIn extends React.Component{
	constructor(){
		super()
		this.state={ 
			display: 'none'
		}
	}
	handlePage(){
		this.props.history.push('/')
	}
	handlePageToAdmin(){
		this.props.history.push('/admin')
	}
	handleChange(e){		
        this.setState({[e.target.id]:e.target.value},()=>{
            console.log(this.state)
        })
    }
	handleClick(){
		var email = this.state.user
		var {password} = this.state	    
	    Meteor.loginWithPassword( 
            {email},password,(err=>{
                  if(err){ debugger
                  		//alert('Algo no ha funcionado. Por favor, inténtalo de nuevo o contacta con c.delriofrances@gmail.com')                    
					this.setState({
					        header:'Datos incorrectos',
					        color:'red',
					        text:'white',
					        message:'Por favor, inténtalo de nuevo o contacta con el administrador del sitio web.',
					        display:'block'  
					    }) 
                      //handle error
                      //try putting a debugger here to start with so that
                       //you can see what the error is.
                  }else{ debugger
                  		//alert('Bienvenid@ Admin!')
                  		this.setState({
					        header:'Bienvenid@ Admin!',
					        color:'white',
					        text: 'green',
					        message:'En breve serás redireccionado a la página de administrador.',
					        display:'block'  
					    }) 
					    setTimeout(()=>{
							this.handlePageToAdmin()
					    },5000)
                  		
              //handle success 
              //maybe displaying a success message?
                  }
            })
    	)       

	}
	
	render(){
		let style ={ display:this.state.display }
		return(
			<span>
				<div className='login_border'>
				<p className='p_accordion padding_top_buttons'>ACCESO ADMINISTRADOR</p>
				<p>Introduce tus datos de acceso:</p>
				<input					
					id= 'user'
					onChange= {this.handleChange.bind(this)}
					placeholder= 'email'/>
				<input
					id= "password"
					type="password"
					onSumbmit= {this.handleClick.bind(this)}
					onChange= {this.handleChange.bind(this)}					
					placeholder= 'password' /><br />
				<p></p>
				<button onClick={this.handleClick.bind(this)}>LogIn</button>
				<button onClick={this.handlePage.bind(this)}>Cancel</button>
				<p></p>
				<div style ={style}> 
				   	<MessageGeneric 
				      header  = {this.state.header}
				      message = {this.state.message}
				      color   = {this.state.color}
				      text	  = {this.state.text}
				    />
				</div>
				</div>
			</span>
		)
	}
}