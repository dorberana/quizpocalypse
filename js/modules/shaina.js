export default {
    state: {
        profile: {
            username: "ShayApondar",
            fullName: "Apondar, Shaina Mae B.",
        },

        items: [
            {
                question: "Each website on the Internet can be accessed by entering a unique address. This address is referred to as the_____",
                choices: {
                    A: "HTTP",
                    B: "HTML",
                    C: "FTP",
                    D: "URL"
                },
                correct: "D"
            },

            {
                question: "Which of the following is 1,048,576 bytes?",
                choices: {
                    A: "Terabyte",
                    B: "Gigabyte",
                    C: "Megabyte",
                    D: "Kilobyte"
                },
                correct: "C"
            },

            {
                question: "Whatb does CPU stands for?",
                choices: {
                    A: "Central Processing Unit",
                    B: "Central Processing Utility",
                    C: "Central Program Unit",
                    D: "Central Power Unit"
                },
                correct: "A"
            },

            {
                question: "Which ofvthe following programming languages is used for web development?",
                choices: {
                    A: "Java",
                    B: "Python",
                    C: "C++",
                    D: "HTML"
                },
                correct: "D"
            },

            {
                question: "What does RAM stand for in computing",
                choices: {
                    A: "Random Access Memory",
                    B: "Random Access Method",
                    C: "Read-Only Memory",
                    D: "Read-Only Method"
                },
                correct: "A"
            },

            {
                question: "Which of the following is not a type of computer virus?",
                choices: {
                    A: "Trojan",
                    B: "Worm",
                    C: "Butterfly",
                    D: "Spyware"
                },
                correct: "C"
            },

            {
                question: "Which of the following is a type of database management system?",
                choices: {
                    A: "Node.js",
                    B: "Angular",
                    C: "MongoDB",
                    D: "ReactJS"
                },
                correct: "C"
            },
            
            {
                question: "Whisch of the following programming languages is ujsed for developing mobile applications",
                choices: {
                    A: "Java",
                    B: "Python",
                    C: "C++",
                    D: "Laravel"
                },
                correct: "A"
            },
            
            {
                question: "What is the most popular front-end development framework?",
                choices: {
                    A: "Ruby on Rails",
                    B: "ReactJS",
                    C: "AngularJS",
                    D: "VueJS"
                },
                correct: "B"
            },
            
            {
                question: "Which of the following is a type of NoSQL database?",
                choices: {
                    A: "MySQL",
                    B: "PostgreSQL",
                    C: "Cassandra",
                    D: "SQL Server"
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