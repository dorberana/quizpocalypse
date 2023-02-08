export default {
    state: {
        profile: {
            username: "DEVANGEL4",
            fullName: "Ma. Angela Janelle D.P. Fabricante",
        },

        items: [
            {
                question: "What is the purpose of computer in our daily life?",
                choices: {
                    A: "To store, access, manipulate, calculate, analyze data, and retrieve information in computer.",
                    B: "To watch online videos using computer.",
                    C: "To play games in computer."
                },
                correct: "A"
            },
            {
                question: "What is smartphone?",
                choices: {
                    A: "A smartphone is an application to make calls.",
                    B: "A device used in driving",
                    C: "A smartphone is a cellular phone that has an integrated computer and composed of various features such as an operating system, web browsing, and the ability to run software applications."
                },
                correct: "C"
            },
            {
                question: "What is an Artificial Intelligence?",
                choices: {
                    A: "Artificial Intelligence is a toy.",
                    B: "Artficial Intelligence is an online games.",
                    C: "A machine to display human-like capabilities such as reasoning, learning, planning and creativity."
                },
                correct: "C"
            },
            
            {
                question: "What programming language used in Facebook?",
                choices: {
                    A: "PHP",
                    B: "Java",
                    C: "C++"
                },
                correct: "A"
            },

            {
                question: "What is the most popular mobile application development platform",
                choices: {
                    A: "iOs",
                    B: "Android",
                    C: "Windows Phone",
                    
                },
                correct: "B"
            },

            {
                question: "What is the most common database management system used in web development?",
                choices: {
                    A: "MySQL",
                    B: "MongoDB",
                    C: "Oracle Database",
                    
                },
                correct: "A"
            },

            {
                question: "What is the purpose of using a CSS preprocessor in web development?",
                choices: {
                    A: "To add new functionalities in CCS.",
                    B: "To make the CCS code more readable and maintanable.",
                    C: "To speed up the loading time of CSS files.",
                    
                },
                correct: "B"
            },

            {
                question: "What is SSL stands for?",
                choices: {
                    A: "Systematic Security Layer",
                    B: "Secret Service Logarithm",
                    C: "Secure Socket Layer",
                    
                },
                correct: "C"
            },

            {
                question: "How can you protect your computer from becoming a zombie?",
                choices: {
                    A: "By installing anti-virus software.",
                    B: "By avoiding clicking on suspicious links.",
                    C: "Both A and B",
                    
                },
                correct: "C"
            },

            {
                question: "What happens if your computer becomes a zombie in a botnet?",
                choices: {
                    A: "Your personal data may be stolen.",
                    B: "Your computer may become a zombie that eats people.",
                    C: "Your computer may be used to perform malicious tasks without your knowledge",
                    
                },
                correct: "c"
            },


        ]
    },

    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};
