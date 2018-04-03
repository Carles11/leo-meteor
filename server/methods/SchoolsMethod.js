import {Meteor} from 'meteor/meteor'
import {Schools} from '../../imports/api/Schools'

Meteor.methods({
	addUser: function(profile) {
		Schools.insert({...profile})
	}
});
// Meteor.methods({
// 	createUserInServer: function (email, password, profile) {
// 		Accounts.createUser({ email, password, profile})
// 	}
	
// })





















































// import {Accounts} from 'meteor/accounts-base'
// import{Meteor} from 'meteor/meteor'
// import {Email} from 'meteor/email'

// Meteor.methods({
// 	createUserInServer : function(username, email, password, profile) {
// 		Accounts.createUser({username, email, password, profile})
// 	}
// })

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

// Meteor.methods({
//   sendEmail : function(to, from, subject, text) {

//     //check([to,from,subject,text], [String])
//     if(typeof to === 'string' && typeof from === 'string' && typeof subject === 'string' && typeof text === 'string'){
//       // Let other method calls from the same client start running, without
//       // waiting for the email sending to complete.
//       this.unblock()

//       Email.send({to,from,subject,text})
//     }
//   }
// })

// Meteor.methods({
// 	updateEmail: function(userId, oldEmail, newEmail){
// 		Meteor.users.update({_id:userId, "emails.address":oldEmail},{$set:{'emails.$.address':newEmail}},()=>{
// 			console.log('email updated!')
// 		})
// 	}
// })

// Meteor.methods({
//   updateAddress: function(userId, address){
//     Meteor.users.update({_id:userId},{$set:{'profile.address':address}},()=>{
//     	console.log('address updated!')
// 		})
//   }
// })

// Meteor.methods({
//   updatePhoneNumber: function(userId, number){
//     Meteor.users.update({_id:userId},{$set:{'profile.phone':number}},()=>{
//       console.log('number updated!')
//     })
//   }
// })
// © 2018 GitHub, Inc.
// Terms