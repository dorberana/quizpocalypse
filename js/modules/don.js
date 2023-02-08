export default {
    state: {
        profile: {
            username: "Djohn6161",
            fullName: "Don John Daryl Curativo",
        },

        items: [
            {
                question: "What is the primary goal of a software development process?",
                choices: {
                    A: "To write the most efficient code",
                    B: "To deliver software as quickly as possible",
                    C: "To meet customer requirements",
                    D: "To follow industry standards"
                },
                correct: "C"
            },
            {
                question: "What is an operating system?",
                choices: {
                    A: "A type of hardware component",
                    B: "A programminh language",
                    C: "A set of software programs that manage computer hardware and software resources",
                    D: "A database management system"
                },
                correct: "C"
            },
            {
                question: "What is the purpose of compiler?",
                choices: {
                    A: "To interpret code line by line",
                    B: "To execute code directly",
                    C: "To translate high-level programming code into machine code",
                    D: "To debug code"
                },
                correct: "C"
            },
            {
                question: "what is an example of a dynamic programming language?",
                choices: {
                    A: "C++",
                    B: "Java",
                    C: "Phython",
                    D: "Assembly"
                },
                correct: "C"
            },
            {
                question: "What is inheritance in object-oriented programming (OOP)?",
                choices: {
                    A: "The ability for an object to receive properties and methods from a parent object",
                    B: "The ability for an object to modify properties and methods of a parent object",
                    C: "The ability for an object to delete properties and methods of a parent object",
                    D: "The ability for an object to create new properties and methods"
                },
                correct: "A"
            },
            {
                question: "What is stack data structure?",
                choices: {
                    A: "A data structure that allows elements to be inserted and removed in a specific order",
                    B: "A data structure that allows elements to be inserted and removed in any order",
                    C: "A data structure that allows elements to be inserted but not removed",
                    D: "A data structure that allows elements to be removed but not inserted"
                },
                correct: "A"
            },
            {
                question: "What is a hash table in computer science?",
                choices: {
                    A: "A data structure that stores data as key-value pairs",
                    B: "A data structure that stores data as a linked list",
                    C: "A data structure that stores data as an array",
                    D: "A data structure that stores data as a binary tree"
                },
                correct: "A"
            },
            {
                question: "What is an API?",
                choices: {
                    A: "A type of software that allows communication between different software systems",
                    B: "A type of hardware component",
                    C: "A programming language",
                    D: "A database management system"
                },
                correct: "A"
            },
            {
                question: "What is a debugger",
                choices: {
                    A: "A tool used to write code",
                    B: "A tool used to translate code into machince code ",
                    C: "A tool used to find and fix errors in code",
                    D: "A tool used to encrypt code"
                },
                correct: "C"
            },
            {
                question: "What is a software library",
                choices: {
                    A: "A collection of pre-written code that can be reused to perform specific tasks",
                    B: "A collection of hardware  components",
                    C: "A collection of pre-written documentation",
                    D: "A collection of pre-written code that can be reused to perform specific tasks"
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
