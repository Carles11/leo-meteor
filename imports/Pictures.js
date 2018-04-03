import React from 'react'
import Scrollchor from 'react-scrollchor'

export default class Pictures extends React.Component{
	render(){
		return(
		<div>
			<div className= 'padding_top_mid'>
                <img 
                name = 'main' 
                className='img_center img_border' 
                height= '500px'  
                src={this.props.main}/>
            </div>
            <div className= 'center_sides padding_top_less stripe_pic_grid mouse_over'>
            <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'one' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/white_book.jpg'/></Scrollchor>
            <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'two' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519591710/Leoleo/kid_reading.jpg'/></Scrollchor>
            <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'three' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519591710/Leoleo/student_reading.jpg'/></Scrollchor>
            <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'four' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/sofa_libro.jpg'/></Scrollchor>
            <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'five' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/image-2018-02-25.jpg'/></Scrollchor>
            <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'six' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/diccionario_kid.jpg'/></Scrollchor>
            <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'seven' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/chica_libro_parque.jpg'/></Scrollchor>
            <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'eight' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/chica_leyendo.jpg'/></Scrollchor>
            <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'nine' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/book_church.jpg'/></Scrollchor>
            <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'ten' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519592099/Leoleo/news.jpg'/></Scrollchor>
            </div>
        </div>
		)
	}
}