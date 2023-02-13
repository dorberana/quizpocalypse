export default {
    state: {
        profile: {
            username: "mariacamano02",
            fullName: "Ma. Lourdes Camano",
        },

        items: [
            {
                question: "How many computer languages are in use? ",
                choices: {
                    A: "2000",
                    B: "5000",
                    C: "50"
                },
                correct: "A"
            },
            {
                question: "Which of these is not an early computer?",
                choices: {
                    A: "ENIAC",
                    B: "NASA",
                    C: "UNIVAC"
                },
                correct: "B"
            },
            {
                question: "Who founded Apple Computer?",
                choices: {
                    A: "Stephen Fry",
                    B: "Bill Gates",
                    C: "Steve Jobs"
                },
                correct: "C"
            },
            {
                question: "Which of these is not a peripheral, in computer terms?",
                choices: {
                    A: "Keyboard",
                    B: "Monitor",
                    C: "Motherboard"
                },
                correct: "C"
            },
            {
                question: "Which of the following is not one of the early “protocols,” or ways to use the Internet?",
                choices: {
                    A: "Blogging",
                    B: "Telnet",
                    C: "Gopher"
                },
                correct: "A"
            },
            {
                question: "What does the Internet prefix WWW stand for?",
                choices: {
                    A: "World Wide Web",
                    B: "Wide Width Wickets",
                    C: "Worldwide Weather"
                },
                correct: "A"
            },
            {
                question: "A network designed to allow communication within an organization is called:",
                choices: {
                    A: "an intranet",
                    B: "Yahoo",
                    C: "the World Wide Web"
                },
                correct: "A"
            },
            {
                question: "Which of these is not a kind of computer?",
                choices: {
                    A: "Apple",
                    B: "Lada",
                    C: "Lenovo"
                },
                correct: "B"
            },
            {
                question: "Which of these products is not made by the Apple Corporation?",
                choices: {
                    A: "IMAX",
                    B: "iPhone",
                    C: "iMac"
                },
                correct: "A"
            },
            {
                question: "What is the name for a computer pointing device?",
                choices: {
                    A: "Mouse",
                    B: "Sound Card",
                    C: "Ram"
                },
                correct: "A"
            },



            /*{
                question: "Question 1",
                choices: {
                    A: "Choice 1",
                    B: "Choice 2”,a
                    C: "Choice 3",
                    D: "Choice 4"
                },
                correct: "D"
            }, */
        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};
