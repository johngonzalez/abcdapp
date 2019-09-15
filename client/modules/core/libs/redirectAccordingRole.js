export default function (FlowRouter,Meteor, Roles) {
  const mainRole = Roles.getRolesForUser(Meteor.userId())[0];
  switch (mainRole) {
    case 'teacher':
      FlowRouter.go('/classes');
      break;
    case 'admin':
      FlowRouter.go('/teachers');
      break;
    case 'student':
      FlowRouter.go('/code');
      break;
  }
}
