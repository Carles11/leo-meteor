
import React, { Component } from 'react'
import {Accounts} from 'meteor/accounts-base'
import {Schools} from './api/Schools'
import AdminUsersList from './AdminUsersList'
import AdminNavBar from './AdminNavBar'
import ReactToPrint from "react-to-print"


export default class Admin extends Component{
        constructor(){
            super()
            this.state= { 
                display: '',
                year: ''}
        }
        componentWillMount () {
            
            if(!Meteor.userId()) {
                
                this.setState({display:'none'})
            }else if(Meteor.userId()){ 
                this.setState({display:'block'})
            }
            Tracker.autorun(()=>{
                //var list = Meteor.users.find({}).fetch()
                //this.setState({users:list})
                var schoolList = Schools.find({}).fetch()
                this.setState({users:schoolList})
            })
        }
        handleChange(e){
            this.setState({year:e.target.value})
        }
        render(){
            var style={
                color: 'white'
            }
                return(
                
                <span className='padding_left background_color'>
                    
                    <AdminNavBar
                        display={this.state.display}
                        history= {this.props.history} />
                    <p className= "padding_top_less p_accordion">Página de administración del sitio www.leoleo.de</p>
                    <p>Consulta todas las escuelas inscritas al concurso para un año específico.</p>
                    <p></p>

                    <AdminUsersList 
                        users= {this.state.users} 
                        inputYear= {this.state.year} 
                        history= {this.props.history}
                        ref={el => (this.componentRef = el)}/>  
                    <div style={style}>
                    <ReactToPrint
                      trigger={() => <a href="#">IMPRIMIR / .PDF</a>}
                      content={() => this.componentRef}
                     // copyStyles=
                    />
                    </div>
                           
                </span>       
                )
        }
}
                    