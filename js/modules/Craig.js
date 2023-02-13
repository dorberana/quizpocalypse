export default {
    state: {
        profile: {
            username: "CraigAndBen",
            fullName: "Craig Ben L. Cadag",
        },

        items: [
            {
                question: "What is the main source of food for zombie?",
                choices: {
                    A: "Humans",
                    B: "Animals",
                    C: "Plants"
                },
                correct: "A"
            },            
            {
                question: "How do people become zombies in movies?",
                choices: {
                    A: "By being bitten by a zombie",
                    B: "By being exposed to a virus",
                    C: "Both A and B"
                },
                correct: "C"
            },
            {
                question: "What is the purpose of zombies in popular culture?",
                choices: {
                    A: "To create suspense and excitement",
                    B: "To serve as a metaphor for social and political issues",
                    C: "Both A and B"
                },
                correct: "C"
            },
            {
                question: "Can zombies think or feel emotions?",
                choices: {
                    A: "Yes",
                    B: "No",
                    C: "Maybe"
                },
                correct: "B"
            },
            {
                question: "How do you kill zombies?",
                choices: {
                    A: "By shooting it",
                    B: "By destroying its brain",
                    C: "All of the above"
                },
                correct: "C"
            },
            {
                question: "Are zombies are real?",
                choices: {
                    A: "Yes",
                    B: "No",
                    C: "Maybe"
                },
                correct: "B"
            },
            {
                question: "What is the origin of the term \"zombie\"?",
                choices: {
                    A: "Haitian folklore",
                    B: "African folklore",
                    C: "American folklore"
                },
                correct: "A"
            },
            {
                question: "Do zombies move fast or slow?",
                choices: {
                    A: "Fast",
                    B: "Slow",
                    C: "It depends on the depictions"
                },
                correct: "C"
            },
            {
                question: "Do zombies always been popular in popular culture?",
                choices: {
                    A: "Yes",
                    B: "No",
                    C: "Maybe"
                },
                correct: "B"
            },
            {
                question: "Do zombies have a weakness?",
                choices: {
                    A: "Yes",
                    B: "No",
                    C: "Maybe"
                },
                correct: "B"
            },


        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};
