import store from './store.js';

const app = Vue.createApp({
    data() {
        return {
            app: {
                name: 'QuizPocalypse'
            },
            modules: null,
            active : {
                module  : null,
                profile : null,
                items   : null,
                finished: false,
                score   : 0
            },
            quizModal: {
                id: 'quiz-modal',
                el: null
            },
            confirmModal: {
                id: 'confirm-modal',
                el: null
            },
            query: ''
        }
    },

    computed: {
        allAnswered() {
            let bool = true;
            if(this.active.items) {
                for(let i=0; i<this.active.items.length; i++) {
                    if(this.active.items[i].selected === '') {
                        bool = false;
                        break;
                    }
                }
            }
            return bool;
        },
        searchedModules() {
            if(!this.modules)
                return [];
            const term = this.query.toLowerCase().trim();
            return this.modules.filter(module =>
                module.profile.username.toLowerCase().includes(term) || module.profile.fullName.toLowerCase().includes(term)
            );
        }
    },

    methods: {
        // show or hide quiz modal
        showQuizModal(shown) {
            if(shown)
                this.quizModal.el.show(null);
            else
                this.quizModal.el.hide();
        },

        // show quiz
        showQuiz(module) {
            this.active.module = module;

            // populate active.items
            this.active.items = this.$store.getters[`${module}/items`];
            for(let i=0; i<this.active.items.length; i++) {
                this.active.items[i].selected = '';
            }

            // populate active.profile
            this.active.profile = this.$store.getters[`${module}/profile`];

            // reset values
            this.active.finished = false;
            this.active.score = 0;

            this.showQuizModal(true);
        },

        // hide quiz
        hideQuiz() {
            this.showQuizModal(false);
        },

        // show confirm
        showConfirm() {
            this.confirmModal.el.show();
        },

        // hide confirm
        hideConfirm() {
            this.confirmModal.el.hide();
        },

        // submit quiz
        submitQuiz() {
            // count score
            for(let i=0; i<this.active.items.length; i++) {
                const item = this.active.items[i];
                if(item.correct === item.selected)
                    this.active.score += 1;
            }

            // set module score
            for(let i=0; i<this.modules.length; i++) {
                if(this.modules[i].name === this.active.module) {
                    this.modules[i].score = this.active.score;
                    break;
                }
            }

            this.active.finished = true;
            this.hideConfirm();
        }
    },

    created() {
        // populate modules
        const modules = [];
        for(const key in this.$store._modules.root.state) {
            if(this.$store.getters[`${key}/items`]) {
                modules.push({
                    name: key,
                    profile   : this.$store.getters[`${key}/profile`],
                    totalItems: this.$store.getters[`${key}/items`].length,
                    score: null
                });
            }
        }
        this.modules = modules;
    },

    mounted() {
        // initialize quizModal
        const quizModal = document.getElementById(this.quizModal.id);
        this.quizModal.el = new bootstrap.Modal(quizModal);
        quizModal.addEventListener('hidden.bs.modal',  (event) => {
            this.active.module = null;
        });

        // initialize confirmModal
        const confirmModal = document.getElementById(this.confirmModal.id);
        this.confirmModal.el = new bootstrap.Modal(confirmModal);
    }
});

app.use(store).mount('#app');
