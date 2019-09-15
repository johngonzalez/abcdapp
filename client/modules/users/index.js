import actions from './actions';
import routes from '../core/routes.js';
import methodStubs from './configs/method_stubs';
import handleFirstLogin from './configs/handleFirstLogin';

export default {
  routes,
  actions,
  load(context) {
    methodStubs(context);
    handleFirstLogin(context);
  }
};
