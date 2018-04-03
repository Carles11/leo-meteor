
import React from 'react';
import {render}  from 'react-dom';
import {routes} from '../imports/routes.js';
import {Meteor} from "meteor/meteor"


Meteor.startup(() => {
        render(
                routes(), 
                document.getElementById('home')
                
        )

        Meteor.subscribe('schoolList');
});