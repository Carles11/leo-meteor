import { Meteor } from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base'
import { Email } from 'meteor/email'
import {URL} from './email' 
import {Schools} from '../imports/api/Schools'

// Meteor.publish('userList', function (){ 
// 	if(Meteor.user().profile.Admin) {
// console.log('===================',Meteor.user().profile.Admin)
//   	return Meteor.users.find({});
// 	}
// });
Accounts.config({
  forbidClientAccountCreation: true
});

Meteor.startup(function () {
        process.env.MAIL_URL=URL
});

