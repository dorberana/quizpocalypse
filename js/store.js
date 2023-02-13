// modules
// import arvic from './modules/arvic.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...
import kate from './modules/kate.js';

const store = Vuex.createStore({
    modules: {
        // arvic,

        // include your module here (e.g. john)
        // ...
        kate,
    }
});

export default store;
