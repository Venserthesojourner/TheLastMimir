import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', {main: 'App_home'});
  },
});

FlowRouter.route('/404', {
  name: 'App.notFound',
  action() {
    this.render('App_body', 'App_notFound');
  },
});
