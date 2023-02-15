export default {
    state: {
        profile: {
            username: "axgemsd",
            fullName: "Angelee S. Sto. Domingo",
        },

        items: [
            {
                question: "What is the most important feature of a smartphone?",
                choices: {
                    A: "Processor",
                    B: "Battery Life",
                    C: "Display",
                    D: "All of the above"
                },
                correct: "D"
            },

            {
                question: "What is the primary function of a search engine?",
                choices: {
                    A: "To store information",
                    B: "To provide information",
                    C: "To analyze information",
                    D: "To manipulative information"
                },
                correct: "B"
            },

            {
                question: "What is the most common type of computer virus?",
                choices: {
                    A: "Trojan",
                    B: "Spyware",
                    C: "I love you",
                    D: "Worm"
                },
                correct: "A"
            },

            {
                question: "What is the most common type of computer display?",
                choices: {
                    A: "CRT",
                    B: "LCD",
                    C: "OLED",
                    D: "LED"
                },
                correct: "B"
            },

            {
                question: "What is the origin of zombies in popular culture?",
                choices: {
                    A: "Horror",
                    B: "Science Fiction",
                    C: "Religion",
                    D: "Folklore"
                },
                correct: "D"
            },

            {
                question: "What is the most common type of software development model?",
                choices: {
                    A: "Agile Model",
                    B: "Waterfall Model",
                    C: "V-Model",
                    D: "Spiral Model"
                },
                correct: "A"
            },

            {
                question: "What is the most common type of software development tool?",
                choices: {
                    A: "Integrated Development Environment (IDE)",
                    B: "Source Control Management (SCM)",
                    C: "Project Management Tool",
                    D: "All of the above"
                },
                correct: "A"
            },

            {
                question: "What is the main purpose of software testing in application development?",
                choices: {
                    A: "All of the above",
                    B: "To find bugs",
                    C: "To improve performance",
                    D: "To ensure compatibility"
                },
                correct: "A"
            },

            {
                question: "What is the most common type of front-end framework used in application development?",
                choices: {
                    A: "React",
                    B: "Vue",
                    C: "Angular",
                    D: "All of the above"
                },
                correct: "D"
            },

            {
                question: "What is the most important aspect of application security?",
                choices: {
                    A: "Firewall",
                    B: "Encryption",
                    C: "Invalid validation",
                    D: "All of the above"
                },
                correct: "D"
            },

        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};