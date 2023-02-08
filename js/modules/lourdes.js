export default {
    state: {
        profile: {
            username: "dessacode",
            fullName: "Lourdes Vasquez",
        },

        items: [
            {
                question: "which one is the first search engine in internet?",
                choices: {
                    A: "Google",
                    B: "Archie",
                    C: "Altavista"
                },
                correct: "B"
            },

            {
                question: "Number of bit used by the IPv6 address?",
                choices: {
                    A: "32 bit",
                    B: "64 bit",
                    C: "128 bit"
                },
                correct: "C"
            },

            {
                question: "Which one is the first web browser invented in 1990?",
                choices: {
                    A: "Internet Explorer",
                    B: "Mosaic",
                    C: "Nexus"
                },
                correct: "C"
            },

            {
                question: "Which of the following programming language is used to create programs like applets?",
                choices: {
                    A: "Cobol",
                    B: "C Language",
                    C: "Java"
                },
                correct: "C"
            },

            {
                question: "First computer virus is known as?",
                choices: {
                    A: "Rabbit",
                    B: "Creeper Virus",
                    C: "SCA Virus"
                },
                correct: "B"
            },

            {
                question: "which one programming language is exclusively used for artificial intellegence?",
                choices: {
                    A: "C",
                    B: "Java",
                    C: "Prolog"
                },
                correct: "C"
            },

            {
                question: "a dual layer Blue-ray Disk can store data?",
                choices: {
                    A: "20GB",
                    B: "50GB",
                    C: "35GB"
                },
                correct: "B"
            },

            {
                question: "Firewall in computer is used for?",
                choices: {
                    A: "security",
                    B: "Data Transmission",
                    C: "Monitoring"
                },
                correct: "A"
            },

            {
                question: "which of the following is not an operating system?",
                choices: {
                    A: "DOS",
                    B: "MAC",
                    C: "C"
                },
                correct: "C"
            },

            {
                question: "Which of the following in the OSI (OPEN SYSTEM INTERCONNECTION) Model",
                choices: {
                    A: "9",
                    B: "7",
                    C: "3"
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
