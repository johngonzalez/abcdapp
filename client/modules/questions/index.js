import actions from './actions';
import routes from '../core/routes.js';
import methodStubs from './configs/method_stubs';

export default {
  routes,
  actions,
  load(context) {
    methodStubs(context);
  }
};
