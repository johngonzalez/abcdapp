import {createApp} from 'mantra-core';
import initContext from './configs/context';
import insertHead from './dochead.js';

// modules
import coreModule from './modules/core';
import usersModule from './modules/users';
import questionsModule from './modules/questions';
import statsModule from './modules/stats';


// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(usersModule);
app.loadModule(questionsModule);
app.loadModule(statsModule);
app.init();

// head
insertHead();
