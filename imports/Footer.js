import React from 'react'

export default class Footer extends React.Component{
	handleClick(e){
		debugger
		this.props.history.push(`/${e.target.id}`)
		debugger
	}
	render(){
		return(
		
		<span className='section_footer_text'>
		    <div className='section_footer footer_grid' onClick={this.handleClick.bind(this)}>
			        <div 
			        	className='center'
			        	id='aviso-legal'><a href=''>Aviso legal</a></div>
			        <div className='center'><a href='https://www.facebook.com/pages/Hessenwaldschule/115618345115337' target="_blank">Facebook</a></div>
			        <div className='center no-deco'><a href='http://www.hessenwaldschule.net/' target="_blank">HessenWald Schule</a></div>
			        <div className='center'><a href=''>© 2018 CRiF</a></div>
		    </div>
		</span>
		)
	}
}