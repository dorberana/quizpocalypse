export default {
    state: {
        profile: {
            username: "Arjay4",
            fullName: "Arjay B. Bascon",
        },

        items: [
            {
                question: " This part of computers controls the computer processes and communicates with the other components of a personal computer ",
                choices: {
                    A: "Hard drive",
                    B: "CPU",
                    C: "Motherboard"
                },
                correct: "B"
            },
        
    {
        question: " It houses the CPU, memory and secondary storage devices such as hard drives? ",
        choices: {
            A: "Motherboard",
            B: "Hard drive",
            C: "RAM"
        },
        correct: "A"
    },

{
    question: " Where data lives temporarily while it's being actively used by programs, such as when a user launches a computer application? ",
    choices: {
        A: "Motherboard",
        B: "CPU",
        C: "RAM"
    },
    correct: "C"
},

{
    question: " It provides electricity to all components of a computer system? ",
    choices: {
        A: "RAM",
        B: "CPU",
        C: "Power Supply"
    },
    correct: "C"
},
{
    question: " Used to store files, programs or other information on a computer system? ",
    choices: {
        A: "Cooling Fan",
        B: "Monitor",
        C: "Hard drive"
    },
    correct: "C"
},

{
    question: " An electronic device that displays what's what programs are running on your computer so a user can see? ",
    choices: {
        A: "Cooling Fan",
        B: "Monitor",
        C: "Power Supply"
    },
    correct: "B"
},
{
    question: " Device that digitally copies an image or and makes it available as a file for access on a computer? ",
    choices: {
        A: "Scanner",
        B: "Monitor",
        C: "Printer"
    },
    correct: "A"
},
{

    question: " A wire or is wireless and is an input device used to control a cursor on the computer monitor? ",
    choices: {
        A: "Keyboard",
        B: "Mouse",
        C: "Screen"
    },
    correct: "B"
},
{  
question: " Machine that produces copies of text or images on paper using ink? ",
    choices: {
        A: "Scanner",
        B: "Printer",
        C: "Mouse"
    },
    correct: "B"
},
{

question: " A machine that can be programmed to carry out sequences of arithmetic or logical operations (computation) automaticall? ",
    choices: {
        A: "Computer",
        B: "Wifi",
        C: "Router"
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