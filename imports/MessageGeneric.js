import React, { Component } from 'react'


class MessageGeneric extends React.Component{
        render() {
        	debugger
	         let visible = {
	                  background:this.props.color,
	                  color:this.props.text,
	                  maxWidth:'250px',
	                  margin:'0 auto',
	                  padding:'.5rem'
	          }
	        return (
	            <div className="alert_message"
	            //class from semantic ui
	                style = {visible}>
	                  <div>
	                    {this.props.header}
	                  </div>
	              <p>{this.props.message}</p>
	            </div>
	        )                   
	    }
}

export default MessageGeneric