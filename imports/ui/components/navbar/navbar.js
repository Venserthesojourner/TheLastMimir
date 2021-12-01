import './navbar.html'
import {Session} from "meteor/session";

Template.navbar.helpers({
    //add you helpers here
});

Template.navbar.events({
    //add your events here
});

Template.navbar.onCreated(function () {
    //add your statement here
});

Template.navbar.onRendered(function () {
    //add your statement here
});

Template.navbar.onDestroyed(function () {
    //add your statement here
});

Template.conLogin.events({
    'click .logout': function (event){
        event.preventDefault();
        Meteor.logout();
    }
})

Template.sinLogin.events({
    'click .login-toggle': function (event) {
        event.preventDefault()
        Session.set('nav-toggle', 'open');
    }
})

Template.LoginModal.events({
    'click .close-login': function (event) {
        event.preventDefault()
        Session.set('nav-toggle', '');
    }
});