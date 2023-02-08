export default {
    state: {
        profile: {
            username: "kathycode",
            fullName: "Kathlyn A. Ramos",
        },

        items: [
            {
                question: "In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
                choices: {
                    A: "1850s",
                    B: "1880s",
                    C: "1930s"
                },
                correct: "B"
            },

            {
                question: "What is part of a database that holds only one type of information?",
                choices: {
                    A: "Report",
                    B: "Field",
                    C: "Record"
                },
                correct: "B"
            },

            {
                question: "OS' computer abbreviation usually means ?",
                choices: {
                    A: "Order of Significance",
                    B: "Open Software",
                    C: "Operating System"
                },
                correct: "C"
            },

            {
                question: "In which decade with the first transatlantic radio broadcast occur?",
                choices: {
                    A: "1860s",
                    B: "1870s",
                    C: "1900s"
                },
                correct: "A"
            },

            {
                question: "'.MOV' extension refers usually to what kind of file?",
                choices: {
                    A: "Image File",
                    B: "Animation/movie file",
                    C: "Audio file"
                },
                correct: "B"
            },

            {
                question: "In which decade was the SPICE simulator introduced?",
                choices: {
                    A: "1950s",
                    B: "1960s",
                    C: "1970s"
                },
                correct: "C"
            },

            {
                question: "Most modern TV's draw power even if turned off. The circuit the power is used in does what function?",
                choices: {
                    A: "Sound",
                    B: "Remote control",
                    C: "Color Balance"
                },
                correct: "B"
            },

            {
                question: "Which is a type of Electrically-Erasable Programmable Read-Only Memory?",
                choices: {
                    A: "Flash",
                    B: "Flange",
                    C: "Fury"
                },
                correct: "A"
            },

            {
                question: "The purpose of choke in tube light is ?",
                choices: {
                    A: "To increase the current",
                    B: "To decrease the voltage momentarily",
                    C: "To increase the voltage momentarily"
                },
                correct: "C"
            },

            {
                question: "'.MPG' extension refers usually to what kind of file?",
                choices: {
                    A: "Animation/movie file",
                    B: "WordPerfect Document file",
                    C: "Image file"
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
