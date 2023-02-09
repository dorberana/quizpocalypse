// modules
// import arvic from './modules/arvic.js';

// import your .js file here (e.g. import john from './modules/john.js')
// ...
import gemma from './modules/gemma.js';
import shaina from './modules/shaina.js';
import don from './modules/don.js';
import markisrael from './modules/markisrael.js';
import arjay from './modules/arjay.js';
import vince from './modules/vince.js';
import dominic from './modules/dominic.js';
import lourdes from './modules/lourdes.js';
import kathlyn from './modules/kathlyn.js';

const store = Vuex.createStore({
    modules: {
        // arvic,

        // include your module here (e.g. john)
        // ...
        gemma,
        shaina,
        don,
        markisrael,
        arjay,
        vince,
        dominic,
        lourdes,
        kathlyn,
    }
});

export default store;
