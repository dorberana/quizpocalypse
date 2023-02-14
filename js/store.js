// modules
import arvic from './modules/arvic.js';

import dorothy from './modules/dorothy.js';
// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        dorothy,

        // include your module here (e.g. john)
        // ...
       
    }
});

export default store;
