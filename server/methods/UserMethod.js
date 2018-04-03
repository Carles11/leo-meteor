import {Accounts} from 'meteor/accounts-base'
import{Meteor} from 'meteor/meteor'
import {Email} from 'meteor/email'

Meteor.methods({
	createUserInServer : function(email, password, profile) {
		var profile = {Admin: true} //Use this instead of profile to create an Admin User
		var account = Accounts.createUser({email, password, profile})
		return account
	}
})




























// Meteor.methods({
//   sendEmail(to, from, subject, text) {
//     // Make sure that all arguments are strings.
//     //check([to, from, subject, text], [String]);

//     // Let other method calls from the same client start running, without
//     // waiting for the email sending to complete.
//     this.unblock();

//     Email.send({ to, from, subject, text });
//   }
// });

// Meteor.methods({
// 	sendConfirmationEmail : function(to, from, subject, text) {

// 		//check([to,from,subject,text], [String])
// 		if(typeof to === 'string' && typeof from === 'string' && typeof subject === 'string' && typeof text === 'string'){
//       // Let other method calls from the same client start running, without
//       // waiting for the email sending to complete.
//       this.unblock()

//       Email.send({to,from,subject,text})
// 		}
//   }
// })
