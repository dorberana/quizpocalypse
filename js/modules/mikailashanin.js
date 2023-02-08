export default {
    state: {
        profile: {
            username: "miksdumb",
            fullName: "Mikaila Shanin Sotaso",
        },

        items: [
            {
                question: "Which film first introduced the concept of zombies eating brains?",
                choices: {
                    A: "The Return of the Living Dead",
                    B: "Night of the Living Dead",
                    C: "Voodoo Island "
                },
                correct: "A"
            },

            {
                question: "What real-life insect is susceptible to a zombie-like virus?",
                choices: {
                    A: "Dampwood Termite",
                    B: "Gypsy Moth Caterpillar",
                    C: "CAsian Tiger Mosquito"
                },
                correct: "B"
            },

            {
                question: "According to Harvard ethnobotanist Wade Davis, a living person can actually be turned into a zombie using the flesh of a ________.",
               choices: {
                    A: "Pufferfish",
                    B: "Black Mamba Gila ",
                    C: "Gila Monster"
                },
                correct: "A"
            },

            {
                question: "The term 'zombie' comes from which country's folklore?",
                choices: {
                    A: "The Walking Dead",
                    B: "Generation Dead",
                    C: "Hiati"
                },
                correct: "C"
            },

            {
                question: "What term describes a genre of fiction in which civilization collapses due to overwhelming swarms of zombies?",
                choices: {
                    A: "Zombie apocalypse",
                    B: "World War Z",
                    C: "The Cranberries"
                },
                correct: "B"
            },

            {
                question: "Which 2009 American post-apocalyptic zombie comedy film stars Woody Harrelson and Emma Stone?",
                choices: {
                    A: "Simon Pegg",
                    B: "Dawn of the Dead",
                    C: "Zombieland"
                },
                correct: "C"
            },

            {
                question: "Kinemortophobia is the fear of zombies?",
                choices: {
                    A: "Yes",
                    B: "No",
                    C: "Maybe"
                },
                correct: "A"
            },

            {
                question: "Who plays Shaun in the 2004 zombie comedy film Shaun of the Dead?",
                choices: {
                    A: "Boris Pickett ",
                    B: "Simon Pegg",
                    C: "Michael Jackson"
                },
                correct: "B"
            },

            {
                question: "Which American television series tells the story of Rick Grimes, who wakes from a coma to discover a world overrun by zombies?",
                choices: {
                    A: "Monster Mash ",
                    B: "Attack at the Tower",
                    C: "The Walking Dead"
                },
                correct: "C"
            },

            {
                question: "Which Hungarian-American actor starred in the 1932 film White Zombie?",
                choices: {
                    A: "Bela Lugosi",
                    B: "Bella Hadid",
                    C: "Bela Swan"
                },
                correct: "A"
            },

            /*{
                question: "Question 1",
                choices: {
                    A: "Choice 1",
                    B: "Choice 2",
                    C: "Choice 3",
                },
                correct: "A"
            }, */

            
        ]

        
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};
