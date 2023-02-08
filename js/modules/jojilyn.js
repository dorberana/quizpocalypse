export default {
    state: {
        profile: {
            username: "axuariuus",
            fullName: "Jojilyn P. Romero",
        },

        items: [
            {
                question: "What is cloud computing used for?",
                choices: {
                    A: "Cloud Computing is used for storing and accessing files",
                    B: "Cloud Computing is used for making phone calls",
                    C: "Cloud Computing is used for playing"
                },
                correct: "A"
            },

            {
                question: "What is the most widely used front-end framework for web development?",
                choices: {
                    A: "Vue.js",
                    B: "Angular",
                    C: "React"
                },
                correct: "C"
            },

            {
                question: "What is a network that is designed to allow communication within an organization?",
                choices: {
                    A: "Yahoo",
                    B: "Internet",
                    C: "Intranet"
                },
                correct: "C"
            },

            {
                question: "Which of the following is not an early computer?",
                choices: {
                    A: "NASA",
                    B: "UNIVAC",
                    C: "ENIAC"
                },
                correct: "A"
            },

            {
                question: "If a developer is planning to build a mobile application, which of the following issues is the most important?",
                choices: {
                    A: "Platform",
                    B: "Usability",
                    C: "Security"
                },
                correct: "B"
            },

            {
                question: "Aside from deployment, what are the other parts of the application lifecycle that can be automated?",
                choices: {
                    A: "Moving code to test environments",
                    B: "Coding the application",
                    C: "Delivering failed test reports to the developer's inbox",
                    D: "Both B and C"
                },
                correct: "D"
            },

            {
                question: "What is the most common language used for server-side web development?",
                choices: {
                    A: "PHP",
                    B: "JavaScript",
                    C: "HTML"
                },
                correct: "A"
            },

            {
                question: "What is the purpose of an API in application development?",
                choices: {
                    A: "To store data for the application",
                    B: "To allow different applications to communicate with each other",
                    C: "To provide a user interface for the application"
                },
                correct: "B"
            },

            {
                question: "What is the main goal of a zombie computer in a botnet?",
                choices: {
                    A: "To spread malware to other computers",
                    B: "To perform DDoS attacks",
                    C: "To steal personal data from infected computers"
                },
                correct: "B"
            },

            {
                question: "What is a zombie computer in computer terms?",
                choices: {
                    A: "A computer that has been hacked and is being used to perform malicious tasks",
                    B: "A computer program that is no longer running but still occupying memory",
                    C: "A computer that has become outdated and is no longer usable"
                },
                correct: "A"
            },

        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};
