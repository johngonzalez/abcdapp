import actions from './actions';
import routes from '../core/routes.js';
import methodStubs from './configs/method_stubs';
import handleAnonymousUser from './configs/handleAnonymous';

export default {
  routes,
  actions,
  load(context) {
    methodStubs(context);
    handleAnonymousUser(context);
  }
};
