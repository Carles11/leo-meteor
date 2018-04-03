
import { Email } from 'meteor/email'

Meteor.methods({
  	sendEmail(sender, contactperson, text, telefon) {
  		 //console.log(sender, contactperson, text, telefon)
		Email.send({ 
				to:'c.delriofrances@gmail.com', 
				from:'',
		        subject:'Solicitud de contacto para el concurso "Leo, leo... qué lees? 2018', 
		        html:`<div><p>Hola, Celia:<br />
		        		   A través de la web www.leoleo.de, has recibido esta solicitud de contacto:</p>
		        			<ul>
			        			<li><h4>Nombre:</h4><p>${contactperson}</p></li>
			        			<li><h4>Teléfono:</h4><p> ${telefon}</p></li> 
			        			<li><h4>E-mail:</h4><p> ${sender}</p></li> 
			        			<li><h4>Mensaje original:</h4></li>
			        			<p>${text}</p>
		        			</ul>
		        			<p>Por favor, no contestes directamente a este e-mail. Para contactar con el usuario, utiliza los datos de contacto en el cuerpo de este e-mail. Gracias!</p>
		        	  </div>`
		})
	}
})

Meteor.methods({

	sendEmailRegister(user,email,address,classe,contactperson,telefon,year){
		Email.send({
			to:'c.delriofrances@gmail.com',
			from:'',
			subject:'Concurso "Leo, leo... qué lees?" Subscripción confirmada',
			html:`<div><p>Hola, Celia:<br />
		        		   A través de la web de www.leoleo.de se ha registrado una nueva escuela.
		        		   Estos son los datos disponibles:</p>
		        			<ul>
			        			<li><h4>Escuela:</h4><p>${user}</p></li>
			        			<li><h4>Dirección:</h4><p>${address}</p></li>
			        			<li><h4>Clase inscrita:</h4><p>${classe}</p></li>
			        			<li><h4>Persona de contacto:</h4><p>${contactperson}</p></li>
			        			<li><h4>Teléfono:</h4><p> ${telefon}</p></li> 
			        			<li><h4>E-mail de contacto:</h4><p>${email}</p></li>
			        			<li><h4>Edición del concurso a la que se inscribe:</h4><p> ${year}</p></li>
			       			</ul>
		        	  </div>`
		})
	}
})

Meteor.methods({
	
	sendEmailConfirmation(user,email,address,classe,contactperson,telefon,year){
		Email.send({
			to:`${email}`,
			from:'',
			subject:'Concurso "Leo, leo... qué lees?" Confirmación de registro',
			html:`<div><p>Hola, ${contactperson}:<br />
		        		   A través de la web www.leoleo.de, has solicitado inscribir una escuela para la edición ${year} del concurso de lectura en español "Leo, leo... qué lees".</p>
		        		   Con este e-mail te confirmamos la inscripción de:
		        			<ul>
			        			<li><h4>Escuela:</h4><p>${user}</p></li>
			        			<li><h4>Dirección:</h4><p>${address}</p></li>
			        			<li><h4>Clase inscrita:</h4><p>${classe}</p></li>
			        			<li><h4>Persona de contacto:</h4><p>${contactperson}</p>
			        			<li><h4>E-mail de contacto:</h4><p>${email}</p></li>
			        			<li><h4>Teléfono:</h4><p> ${telefon}</p></li> 
		        			</ul>
		        			<p>Muchas gracias por tomar parte en el concurso de lectura. En breve nos pondremos en contacto contigo.</p>
		        	  </div>`
		})
	}
})