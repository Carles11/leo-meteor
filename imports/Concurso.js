import React from 'react'

export default class Concurso extends React.Component{
	render(){
		return(
			<span className='padding_top_home padding_sides concurso_grid'>
	    <div>
	    	<div className="padding_top_less">
                <h3>El concurso</h3>
    	    	<h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </h4>
	        </div>
            <div className="padding_top_concurso_item">
                <h3>Cuándo es la próxima edición?</h3>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </h4>
            </div>
            <div className="padding_top_concurso_item">
                <h3>Quién lo organiza?</h3>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </h4>
            </div>
        </div>
        <div className="padding_top_less">
    	    <div>	
    	    	<h3>Quién puede participar?</h3>
    	    	<h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lo</h4>
    	    </div>
	       <div className="padding_top_concurso_item">
    	    	<h3 >Quién nos patrocina?</h3>
    	    	<h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </h4>
	       </div>
        </div>
        	</span>
		)
	}
}