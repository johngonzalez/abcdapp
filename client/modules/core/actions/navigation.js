export default {
  logout({Meteor, FlowRouter}, e) {
    e.preventDefault();
    Meteor.logout();
    FlowRouter.go('/');
  }
};
