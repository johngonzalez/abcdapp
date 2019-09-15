import startup from './configs/startup';
import publications from './publications';
import methods from './methods';
import addInitialData from './configs/initial_data';
import uploaderToS3 from './configs/slingshot';
import addAdmin from './configs/fixtures';

startup();
publications();
methods();
addInitialData();
addAdmin();
uploaderToS3();
