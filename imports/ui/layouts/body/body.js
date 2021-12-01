import './body.html';
import '../../components/navbar/navbar'
import '../../components/footer/footer'

const getUser = () => Meteor.user();
const isUserLogged = () => !!getUser();

Template.App_body.helpers({
    isUserLogged: ()=> {
        return isUserLogged();
    }
})