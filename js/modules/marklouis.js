export default {
    state: {
        profile: {
            username: "Cintoshy",
            fullName: "Mark Louis R. Odavar",
        },

        items: [
            {
                question: "Question 1, .gif is an extension of?",
                choices: {
                    A: "Image file ",
                    B: "Video file",
                    C: "Audio file"
                },
                correct: "A"
            },

            {
                question: "Question 2, Where is the headquarter of Microsoft office located?",
                choices: {
                    A: "Texas",
                    B: "New york",
                    C: "Washington"
                },
                correct: "C"
            },
            {
                question: "Question 3, 1024 bit is equal to how masny byte?",
                choices: {
                    A: "1 byte",
                    B: "128 byte",
                    C: "32 byte"
                },
                correct: "A"
            },
            {
                question: "Question 4, Which of the following is not OS",
                choices: {
                    A: "Dos",
                    B: "C",
                    C: "Linux"
                },
                correct: "B"
            },
            {
                question: "Question 5, Firewall in Computer is used for",
                choices: {
                    A: "Security",
                    B: "Monitoring",
                    C: "Authentication"
                },
                correct: "A"
            },
            {
                question: "Question 6, Which of programming language is exclusively used for artificial intelligence?",
                choices: {
                    A: "Prolog",
                    B: "Java",
                    C: "C#"
                },
                correct: "A"
            },
            {
                question: "Question 7, First computer virus is known as",
                choices: {
                    A: "Rabbit",
                    B: "Creeper Virus",
                    C: "SCA Virus"
                },
                correct: "B"
            },
            {
                question: "Question 8, Which of following programming language is used to create progreams like aplets?",
                choices: {
                    A: "COBOL",
                    B: "C Language",
                    C: "Java"
                },
                correct: "C"
            },
            {
                question: "Question 9, Which one is the firstweb browser invenmted in 1990",
                choices: {
                    A: "Internet Explorer",
                    B: "Mosaic",
                    C: "Nexus"
                },
                correct: "C"
            },
            {
                question: "Question 10, Number of bit used by the IPv6 address",
                choices: {
                    A: "32 bit",
                    B: "64 bit",
                    C: "128 bit"
               
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
