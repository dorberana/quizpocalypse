export default {
    state: {
        profile: {
            username: "eyshelvi",
            fullName: "Eichelle R. Vicente",
        },

        items: [
            {
                question: "Which one is the first search engine in internet?",
                choices: {
                    A: "Google",
                    B: "Archie",
                    C: "Altavista",
                    D: "WAIS"
                },
                correct: "B"
            },

            {
                question: "Number of bit used by the IPv6 address",
                choices: {
                    A: "32 bit",
                    B: "64 bit",
                    C: "128 bit",
                    D: "256 bit"
                },
                correct: "C"
            },
            {
                question: "Which one is the first web browser invented in 1990?",
                choices: {
                    A: "Internet Explorer",
                    B: "Mosaic",
                    C: "Mozilla",
                    D: "Nexus"
                },
                correct: "D"
            },
            {
                question: "Which of the following programming language is used to create programs like applets?",
                choices: {
                    A: "COBOL",
                    B: "C Language",
                    C: "Java",
                    D: "BASIC"
                },
                correct: "C"
            },
            {
                question: "First computer virus is known as",
                choices: {
                    A: "Rabbit",
                    B: "Creeper Virus",
                    C: "Elk Cloner",
                    D: "SCA Virus"
                },
                correct: "B"
            },
            {
                question: "Which one programming language is exclusively used for artificial intelligence?",
                choices: {
                    A: "C",
                    B: "Java",
                    C: "J2EE",
                    D: "Prolog"
                },
                correct: "D"
            },
            {
                question: "Firewall in computer is used for",
                choices: {
                    A: "Security",
                    B: "Data Transmission",
                    C: "Authentication",
                    D: "Monitoring"
                },
                correct: "A"
            },
            {
                question: "A dual layer Blue-ray Disc can store data upto",
                choices: {
                    A: "20GB",
                    B: "35GB",
                    C: "12GB",
                    D: "50GB"
                },
                correct: "D"
            },
            {
                question: "Which of the following is not an operating system?",
                choices: {
                    A: "DOS",
                    B: "Mac",
                    C: "C",
                    D: "Linux"
                },
                correct: "C"
            },
            {
                question: "Which of the following is not a database management software?",
                choices: {
                    A: "MySQL",
                    B: "Oracle",
                    C: "Sybase",
                    D: "COBOL"
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