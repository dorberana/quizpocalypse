export default {
    state: {
        profile: {
            username: "Dunnodos",
            fullName: "Jeremy L. Siguenza",
        },

        items: [
            {
                question: "What is RAM?",
                choices: {
                    A: "Memory",
                    B: "Hard Drive",
                    C: "Processor"
                },
                correct: "A"
            },
            {
                question: "How do zombie typically spread in popular culture?",
                choices: {
                    A: "Biting other humans",
                    B: "Through air",
                    C: "Touching orproximity to infected individuals"
                },
                correct: "A"
            },
            {
                question: "What is the global survivors in a zombie apocalypse scenario?",
                choices: {
                    A: "To survive and find safety",
                    B: "To defeat the zombies",
                    C: "To find a cure for the zombie virus"
                },
                correct: "A"
            },
            {
                question: "What is a zombie popular culture?",
                choices: {
                    A: "A mythical creature",
                    B: "A fictional animal",
                    C: "A reanimated human corpse"
                },
                correct: "A"
            },
            {
                question: "What is the cause of the zombie outbreak?",
                choices: {
                    A: "A supernatural event",
                    B: "A virus or disease",
                    C: "A government experiment gone wrong"
                },
                correct: "B"
            },
            {
                question: "What is an app?",
                choices: {
                    A: "Hardware",
                    B: "Software",
                    C: "Network"
                },
                correct: "B"
            },
            {
                question: "What is a computer virus?",
                choices: {
                    A: "Malware",
                    B: "Operating system",
                    C: "None of the above"
                },
                correct: "A"
            },
            {
                question: "What is a computer network?",
                choices: {
                    A: "Server",
                    B: "Network",
                    C: "Operating system"
                },
                correct: "B"
            },
            {
                question: "What is a compuiter graphics card?",
                choices: {
                    A: "Graphics Processing Unit",
                    B: "Memory",
                    C: "Storage"
                },
                correct: "A"
            },
            {
                question: "What is a zombie horde?",
                choices: {
                    A: "A zombie leader",
                    B: "A gathering of people dressed as zombie for fun",
                    C: "A zombie hunsting event"
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