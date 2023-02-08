// modules
import arvic from './modules/arvic.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...
import mikailashanin from './modules/mikailashanin.js';
import dominic from './modules/dominic.js';
import lourdes from './modules/lourdes.js';
import kathlyn from './modules/kathlyn.js';

const store = Vuex.createStore({
    modules: {
        arvic,

        // include your module here (e.g. john)
        // ...
        mikailashanin,
        dominic,
        lourdes,
        kathlyn,
    }
});

export default store;
