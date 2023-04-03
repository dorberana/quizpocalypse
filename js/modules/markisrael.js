export default {
    state: {
        profile: {
            username: "markburce17",
            fullName: "Mark Israel A. Burce",
        },

        items: [
            {
                question: "What fighter plane of World War II came out of a design for a racing seaplane?",
                choices: {
                    A: "F6F Hellcat",
                    B: "SBD Dauntless",
                    C: "Spitfire"
                },
                correct: "C"
            },

            {
                question: "Which of these is a file format for digital images?",
                choices: {
                    A: "CIA",
                    B: "JPG",
                    C: "IBM"
                },
                correct: "B"
            },

            {
                question: "To which of these devices is the cellular telephone most closely related?",
                choices: {
                    A: "Telegram",
                    B: "Radio",
                    C: "Telescope"
                },
                correct: "B"
            },

            {
                question: "What is the name for a computer pointing device?",
                choices: {
                    A: "Mouse",
                    B: "Monitor",
                    C: "Keyboard"
                },
                correct: "A"
            },
            
            {
                question: "How many computer languages are in use?",
                choices: {
                    A: "11000",
                    B: "3000",
                    C: "2000"
                },
                correct: "C"
            },

            {
                question: "Which of these is not a peripheral, in computer terms?",
                choices: {
                    A: "Motherboard",
                    B: "Cellular phone",
                    C: "Printer"
                },
                correct: "A"
            },

            {
                question: "Which of the following is not one of the early “protocols,” or ways to use the Internet?",
                choices: {
                    A: "Blogging",
                    B: "Telonet",
                    C: "Gopher"
                },
                correct: "A"
            },

            {
                question: "A network designed to allow communication within an organization is called",
                choices: {
                    A: "The Internet",
                    B: "Intranet",
                    C: "Yahoo"
                },
                correct: "B"
            },

            {
                question: "What does the Internet prefix WWW stand for?",
                choices: {
                    A: "Wide Width Wickets",
                    B: "World Wide Web",
                    C: "Worldwide Weather"    
                },
                correct: "B"
            },

            {
                question: "When did the compact disc first appear on the market?",
                choices: {
                    A: "1982",
                    B: "1990",
                    C: "1999"
                },
                correct: "A"
            },



            /*{
                question: "Question 1",
                choices: {
                    A: "Choice 1",
                    B: "Choice 2",
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
