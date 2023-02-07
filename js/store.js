// modules
import arvic from './modules/arvic.js';

// import your .js file here (e.g. import john from './modules/john.js')
import jericho from './modules/jericho.js';

const store = Vuex.createStore({
    modules: {
        arvic, jericho

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
