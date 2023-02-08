export default {
    state: {
        profile: {
            username: "mairerouse",
            fullName: "Mary Rose Nonsol",
        },

        items: [
            {
                question: "You hear on the radio that an invasion of zombies is coming. What would you do first?",
                choices: {
                    A: "Board up the house and stock up on supplies.",
                    B: "Wait for them to come and blast them full of lead.",
                    C: "Flee to the forest in terror."
                },
                correct: "A"
            },

            {
                question: "Zombies break into your base and are attacking your friends. What do you do?",
                choices: {
                    A: "Sacrifice yourself to save your friends.",
                    B: "Leave them and escape to save yourself.",
                    C: "Kill the zombies then check your group for bites."
                },
                correct: "C"
            },

            {
                question: "Your sister has been bitten. What do you do?",
                choices: {
                    A: "Say your sorry then kill her without hesitation.",
                    B: "Leave her behind.",
                    C: "Stay with her, knowing there has to be a cure."
                },
                correct: "A"
            },

            {
                question: "How big would your group be?",
                choices: {
                    A: "2-4 people. Easier to move around.",
                    B: "Anything that would work out well for me.",
                    C: "I travel alone."
                },
                correct: "B"
            },

            {
                question: "You've been bitten and are turning to a zombie. What would you do?",
                choices: {
                    A: "Don't tell anyone",
                    B: "Kill myself.",
                    C: "Tell everyone goodbye then run away."
                },
                correct: "B"
            },

            {
                question: "There is a cure to the Zombie Infection.",
                choices: {
                    A: "False",
                    B: "True",
                    C: "I don't know"
                },
                correct: "A"
            },

            {
                question: "Which of the following are ways living humans can be infected by zombies?",
                choices: {
                    A: "Zombie bite",
                    B: "Brushing open wounds against zombies",
                    C: "All of the Above"
                },
                correct: "C"
            },

            {
                question: "In “The Walking Dead” TV series, what do the survivors theorize most attracts walkers to humans?",
                choices: {
                    A: "Heat",
                    B: "Smell",
                    C: "Movement"
                },
                correct: "B"
            },

            {
                question: "According to the “Zombie Survival Guide,” which of the following are zombies NOT capable of doing?",
                choices: {
                    A: "Climbing stairs",
                    B: "Climbing ladders",
                    C: "Walking underwater"
                },
                correct: "B"
            },

            {
                question: "What is the only way to kill a zombie?",
                choices: {
                    A: "Decapitate, then completely burn the zombie to ash",
                    B: "Drive a stake through its heart",
                    C: "Damage or destroy the brain"
                },
                correct: "C"
            },
        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};