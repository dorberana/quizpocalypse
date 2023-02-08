export default {
    state: {
        profile: {
            username: "nickelodeon404",
            fullName: "Dominic Ama",
        },

        items: [
            {
                question: "What does HTML stand for?",
                choices: {
                    A: "Home Tool Markup Language",
                    B: "Hyperlinks and Text Markup Language",
                    C: "Hyper Text Markp Language"
                },
                correct: "C"
            },

            {
                question: "Who is making the Web standards?",
                choices: {
                    A: "The World Wide Web Consortium",
                    B: "Google",
                    C: "Microsoft"
                },
                correct: "A"
            },

            {
                question: "Choose the correct HTML element for the largest heading:",
                choices: {
                    A: "<h3>",
                    B: "<h1>",
                    C: "<heading>"
                },
                correct: "B"
            },

            {
                question: "What is the correct HTML element for inserting a line break?",
                choices: {
                    A: "<br>",
                    B: "<lb>",
                    C: "<break>"
                },
                correct: "A"
            },

            {
                question: "Choose the correct HTML element to define important text",
                choices: {
                    A: "<i>",
                    B: "<important",
                    C: "<strong>"
                },
                correct: "C"
            },

            {
                question: "Inside which HTML element do we put the JavaScript?",
                choices: {
                    A: "<js>",
                    B: "<script>",
                    C: "<javascript>"
                },
                correct: "B"
            },

            {
                question: "Where is the correct place to insert a JavaScript?",
                choices: {
                    A: "the <head> section",
                    B: "the <body> section",
                    C: "Both the <head> section and the <body> section are correct"
                },
                correct: "C"
            },

            {
                question: "What does CSS stand for?",
                choices: {
                    A: "Cascading Style Sheets",
                    B: "Creative Style Sheets",
                    C: "Cascading Sheet Style"
                },
                correct: "A"
            },

            {
                question: "Where in an HTML document is the correct place to refer to an external style sheet?",
                choices: {
                    A: "At the end of the cdocument",
                    B: "In the <head> section",
                    C: "In the <head> section"
                },
                correct: "C"
            },

            {
                question: "Which HTML tag is used to define an internal style sheet?",
                choices: {
                    A: "<css>",
                    B: "<style>",
                    C: "<script>"
                },
                correct: "B"
            }
        ]
    },


    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};