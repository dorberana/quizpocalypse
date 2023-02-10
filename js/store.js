// modules
import kate from './modules/kate.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...

const store = Vuex.createStore({
    modules: {
        kate,

        // include your module here (e.g. john)
        // ...

    }
});

export default store;
