// import React from 'react'
// import Scrollchor from 'react-scrollchor'

// export default class Pictures extends React.Component{
// 	render(){
// 		return(
// 		<div>
// 			<div className= 'padding_top_mid'>
//                 <img 
//                 name = 'main' 
//                 className='img_center img_border' 
//                 height= '500px'  
//                 src={this.props.main}/>
//             </div>
//             <div className= 'center_sides padding_top_less stripe_pic_grid mouse_over'>
//             <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'one' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/white_book.jpg'/></Scrollchor>
//             <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'two' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519591710/Leoleo/kid_reading.jpg'/></Scrollchor>
//             <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'three' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519591710/Leoleo/student_reading.jpg'/></Scrollchor>
//             <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'four' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/sofa_libro.jpg'/></Scrollchor>
//             <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'five' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/image-2018-02-25.jpg'/></Scrollchor>
//             <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'six' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/diccionario_kid.jpg'/></Scrollchor>
//             <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'seven' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/chica_libro_parque.jpg'/></Scrollchor>
//             <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'eight' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/chica_leyendo.jpg'/></Scrollchor>
//             <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'nine' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/book_church.jpg'/></Scrollchor>
//             <Scrollchor to="galeria"><img onClick={this.props.handlePic} className='img_border_mini img_center_mini' name= 'ten' height= '60px' src='http://res.cloudinary.com/dssldws2k/image/upload/v1519592099/Leoleo/news.jpg'/></Scrollchor>
//             </div>
//         </div>
// 		)
// 	}
// }


//LIGHTBOX MODULE, not working
import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const photos = [
    { src: 'http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/white_book.jpg',            width: 4, height: 3 },
    { src: 'http://res.cloudinary.com/dssldws2k/image/upload/v1519591710/Leoleo/kid_reading.jpg',           width: 1, height: 2 },
    { src: 'http://res.cloudinary.com/dssldws2k/image/upload/v1519591710/Leoleo/student_reading.jpg',       width: 3, height: 4 },
    { src: 'http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/image-2018-02-25.jpg',      width: 3, height: 4 },
    { src: 'http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/sofa_libro.jpg',            width: 3, height: 4 },
    { src: 'http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/diccionario_kid.jpg',       width: 4, height: 3 },
    { src: 'http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/chica_libro_parque.jpg',    width: 4, height: 4 },
    { src: 'http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/chica_leyendo.jpg',         width: 3, height: 4 },
    { src: 'http://res.cloudinary.com/dssldws2k/image/upload/v1519591709/Leoleo/book_church.jpg',           width: 4, height: 3 },
    { src: 'http://res.cloudinary.com/dssldws2k/image/upload/v1519592099/Leoleo/news.jpg',                  width: 4, height: 3 }
];
export default class Pictures extends React.Component {
constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
}
openLightbox(event, obj) {
    this.setState({
        currentImage: obj.index,
        lightboxIsOpen: true,
    });
}
closeLightbox() {
    this.setState({
        currentImage: 0,
        lightboxIsOpen: false,
    });
}
gotoPrevious() {
    this.setState({
        currentImage: this.state.currentImage - 1,
    });
}
gotoNext() {
    this.setState({
        currentImage: this.state.currentImage + 1,
    });
}
    render() {
        return (
            <div>
                <Gallery photos={photos} onClick={this.openLightbox} />
                <Lightbox images={photos}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentImage}
                    isOpen={this.state.lightboxIsOpen}
                />
            </div>
        )
    }
}