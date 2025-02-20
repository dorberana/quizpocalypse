export default {
    state: {
        profile: {
            username: "dorberana",
            fullName: "Drothy Mae Berana",
        },

        items: [
            {
                question: "How many computer languages are in use?",
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
                B: "UNIVAC",
                C: "NASA"
            },
            correct: "C"
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
                A: "Motherboard",
                B: "Monitor",
                C: "Keyboard"
            },
            correct: "A"
             },

          {
            question: "Which of the following is not one of the early “protocols,” or ways to use the Internet?",
            choices: {
                A: "Telnet",
                B: "Blogging",
                C: "FTP"
            },
            correct: "B"
             },

          {
            question: "A ‘font’ describes which of the following things?",
            choices: {
                A: "a kind of computer",
                B: "keys",
                C: "letters"
            },
            correct: "C"
             },

          {
            question: "Which of these is not a kind of computer",
            choices: {
                A: "Yahoo",
                B: "an intranet",
                C: "the Internet"
            },
            correct: "B"
             },

          {
            question: "What kinds of things can you find on a ‘keyboard’?",
            choices: {
                A: "memory",
                B: "words",
                C: "letters"
            },
            correct: "C"
             },

          {
            question: "Which of the following words best describes the word ‘icon’",
            choices: {
                A: "picture",
                B: "number",
                C: "color"
            },
            correct: "A"
             },
          {
            question: "Which of the following words best describes ‘password’?",
            choices: {
                A: "program",
                B: "memory",
                C: "secret"
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