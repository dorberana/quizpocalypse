export default {
    state: {
        profile: {
            username: "juneljoven",
            fullName: "Junel R. Joven",
        },

        items: [
            {
                question: "What is the widely used operating system in the world?",
                choices: {
                    A: "Windows",
                    B: "MacOS",
                    C: "Linux",
                    D: "iOS"
                },
                correct: "A"
            },
            {
                question: "What is the primary use of the internet?",
                choices: {
                    A: "Gaming",
                    B: "E-commerce",
                    C: "Communication",
                    D: "All of the above"
                },
                correct: "D"
            },
            {
                question: "What type of device is typically used for virtual reality experience?",
                choices: {
                    A: "Smartphone",
                    B: "Computer",
                    C: "VF headset",
                    D: "Game console"
                },
                correct: "C"
            },
            {
                question: "What is the term for the small devices that track and report their location?",
                choices: {
                    A: "GPS",
                    B: "NFC",
                    C: "Bluetooth",
                    D: "Wi-Fi"
                },
                correct: "A"
            },
            {
                question: "What is the main purpose of cluod computing?",
                choices: {
                    A: "Data storage",
                    B: "Application development",
                    C: "Remote access  to software",
                    D: "All of the above"
                },
                correct: "D"
            },
            {
                question: "Which company developed the first commercially successful smartphone?",
                choices: {
                    A: "Apple",
                    B: "Microsoft",
                    C: "Blackberry",
                    D: "Nokia"
                },
                correct: "A"
            },
            {
                question: "What type of device used to connect a wireless network?",
                choices: {
                    A: "Router",
                    B: "Switch",
                    C: "Modem",
                    D: "Hub"
                },
                correct: "A"
            },
            {
                question: "What programming language is not commonly used for developing web applications?",
                choices: {
                    A: "Java",
                    B: "Python",
                    C: "JavaScript",
                    D: "Ruby"
                },
                correct: "A"
            },
            {
                question: "What is the most common type of database for storing and retrieving data?",
                choices: {
                    A: "SQL",
                    B: "NoSQL",
                    C: "MongoDB",
                    D: "Cassandra"
                },
                correct: "A"
            },
            {
                question: "What is the term used to describe the process of retrieving information from the internet?",
                choices: {
                    A: "Searching",
                    B: "Browsing",
                    C: "Surfing",
                    D: "Navigating"
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