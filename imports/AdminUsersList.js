import React from 'react'
import {Accounts} from 'meteor/accounts-base'
import AccordionExampleStyled from './AccordionExampleStyled'


export default class AdminUsersList extends React.Component{
//{...ele}
	constructor(){
		super()
		this.state= {
			search:''
		}
	}
	handleClick(){
        this.props.history.push('/')
    }
	updateSearch(event) {
		this.setState({search: event.target.value});
	}
	render(){		
		let filteredSchools = this.props.users.filter(
			(user) => {
				
				if(user) return user.year == this.state.search ;
			}
		);		
 				return(
 					<div>
 						<input type="text"
				                        placeholder='Introduce el año aquí' 
				                        value={this.state.search}
				                        onChange= {this.updateSearch.bind(this)} />	
		 				<p></p>			
	 					{filteredSchools.map((ele,i)=>{
	 						return (
	 								<div>
			 							<AccordionExampleStyled
			 								key 	= {i}
			 								user     = {ele.user}
			 								classe	= {ele.classe}
			 								address = {ele.address}
			 								contactperson = {ele.contactperson}
			 								telefon  = {ele.telefon}
			 								year	= {ele.year}
			 								email   = {ele.email}
			 								inputYear = {this.props.year}/>
			 						</div>	
			 			)
	 					})}
	 					<p></p>
	 					<h3>Listado de escuelas registradas:</h3>
 					</div>
 				)
	}
}