
import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';
import NavBarComp from './NavBarComp'
import Footer from './Footer'
import Pictures from './Pictures'
import Concurso from './Concurso'
import FormPopUpCont from './FormPopUpCont'
import ButtonsToggle from './ButtonsToggle'
import Schools from './api/Schools'

//import 'semantic-ui-css/semantic.min.css';

class Home extends Component {
    constructor(){
        super()
        this.state = {
            display: '',
            main:'http://res.cloudinary.com/dssldws2k/image/upload/v1519232176/Leoleo/joao-silas-51725-unsplash.jpg',
            showPopup: false
        }
        this.handleSubmit = this.handleSubmit.bind(this) 
        this.handleChange = this.handleChange.bind(this) 
    }
    togglePopup() {
        this.setState({
          showPopup: !this.state.showPopup
        })
    }
    togglePopup2() {
        this.setState({
          showPopup2: !this.state.showPopup2
        })
    }
    handlePic(e){
        this.setState({main:e.target.src})
    }
    handleChange(id,value){

        this.setState({[id]:value},()=>{
            console.log(this.state)
        })
    }
    sendEmailRegister(){ 
        Meteor.call(
        'sendEmailRegister',
        this.state.user,
        this.state.email,
        this.state.address,
        this.state.classe,
        this.state.contactperson,
        this.state.telefon,
        this.state.year
        )
    } 
    sendEmailConfirmation(){     
        Meteor.call( 
        'sendEmailConfirmation',
        this.state.user,
        this.state.email,
        this.state.address,
        this.state.classe,
        this.state.contactperson,
        this.state.telefon,
        this.state.year
        )
        alert('Bienvenid@! Te hemos enviado un e-mail confirmando el registro')
    }
    handleSubmit(){
        var that = this
        var profile = {
         user                : this.state.user,
         classe              : this.state.classe,
         telefon             : this.state.telefon,
         address             : this.state.address,
         contactperson       : this.state.contactperson,
         year                : this.state.year,
         email               : this.state.email
        }    
        Meteor.call('addUser',profile,(err,result)=>{         
            if (err)  {
                alert(err.reason) 
            }else { 
                that.sendEmailConfirmation() 
                that.sendEmailRegister()
            }
    })    
        this.togglePopup()
        this.props.history.push('/')
    }
        // DO NOT DELETE THIS CODE!!!
        // USE THIS FORM TO CREATE ADMIN USERS. OR WRITE THEM DIRECTLY IN HOMEBREW MONGO DB

        //     handleSubmit(email, password, profile){
        //             var email = this.state.email
        //             var password = this.state.password
        //             var profile = {
        //              user                : this.state.user,
        //              classe              : this.state.classe,
        //              telefon             : this.state.telefon,
        //              address             : this.state.address,
        //              contactperson       : this.state.contactperson,
        //              year                : this.state.year
        //          }
        //     Meteor.call('createUserInServer', email, password, profile,(err,result)=>{
                
        //         if (err)  {
        //             alert(err.reason) 
        //         } else {
        //             alert('works') 
        //             self.sendEmailConfirmation() 
        //             self.sendEmailRegistration()
        //           }
    
        // })
            
        //     this.togglePopup()
        //     this.props.history.push('/')
            
        // }

  render() {

    return (
        <div className = 'body'>
            <NavBarComp 
                history={this.props.history}/>
            <div 
                id="home" 
                className= 'section_height padding_top_home background_pic'>
                <h1>Leo, leo... qué lees?</h1>
                <img 
                    className= 'img_center_leo' 
                    src= "https://res.cloudinary.com/dssldws2k/image/upload/v1522366616/Leoleo/Leon_gafas.png"/>
                <h2 >Concurso de lectura en español</h2>
                <h4 className="h4_title"> Próxima edición 8 de mayo de 2018 <br />
                en el Instituto Cervantes Frankfurt</h4>
            </div>
            <div id="concurso"                
                className= "background_pic_dark white section_concurso_height">
                <Concurso />
            </div> 
            <div
                className= "section_pic_height background_pic_hell"
                id="galeria">
                <Pictures 
                    main = {this.state.main} 
                    handlePic = {this.handlePic.bind(this)}/>
            </div>
            <div id="registro">
            <ButtonsToggle 
                toggle={this.togglePopup.bind(this)}
                toggle2={this.togglePopup2.bind(this)}
                handleSubmit ={this.handleSubmit}
                handleChange = {this.handleChange}
                showPopup={this.state.showPopup}
                showPopup2={this.state.showPopup2}/>
            </div>
            <Footer 
                history= {this.props.history}/>
        </div>

    );
  }
}

export default Home;