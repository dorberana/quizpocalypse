export default {
    state: {
        profile: {
            username: "Ace0601",
            fullName: "Eloisa A. Celaje",
        },

        items: [
            {
                question: "Regarded as JavaScript's closest friend which is a small and fast parallel setup that ensures near local execution for web applications.",
                choices: {
                    A: "Artificial Intelligence",
                    B: "WebAssembly",
                    C: "Chatbots"
                },
                correct: "B"
            },

            {
                question: "A set of detailed methods, procedures and routines established or formulation to carry out specific activity, perform a duty or solve a problem.",
                choices: {
                    A: "System",
                    B: "System Analysis",
                    C: "System Design"
                },
                correct: "A"
            },

            {
                question: "What do you call a framework that defines tasks performed at each step in the software development process?",
                choices: {
                    A: "Software Process",
                    B: "Software Evolution",
                    C: "Software Development Life Cycle"
                },
                correct: "C"
            },

            {
                question: "_______ is a netwok of interconnected devices that need little or almost no user intervention to execute operations",
                choices: {
                    A: "Router",
                    B: "Networking",
                    C: "Internet of Things"
                },
                correct: "C"
            },

            {
                question: "The point of human-computer interaction and communication in a device is called?",
                choices: {
                    A: "User Interface",
                    B: "Computer",
                    C: "Design"
                },
                correct: "A"
            },

            {
                question: "What is the operating system that is most widely used for ethical hacking?",
                choices: {
                    A: "Windows",
                    B: "macOS",
                    C: "Kali Linux"
                },
                correct: "C"
            },

            {
                question: "This is one of the top web development trends for 2021 which is the process of upgrading and streamlining the information on your pages to appear in voice searches.",
                choices: {
                    A: "Search Engine",
                    B: "Voice Recognition Optimization",
                    C: "Operating System"
                },
                correct: "B"
            },

            {
                question: "________ is an online software development platform used for storing, tracking, and collaborating on software projects.",
                choices: {
                    A: "Github",
                    B: "Visual Studio Code",
                    C: "Eclipse IDE"
                },
                correct: "A"
            },

            {
                question: "is a PHP web application framework created by Taylor Otwell that provides all of the features you need to build modern web applications, such as routing, validation, caching, queues, file storage, and more.",
                choices: {
                    A: "Springboot",
                    B: "CodeIgniter",
                    C: "Laravel"
                },
                correct: "C"
            },

            {
                question: "This is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.",
                choices: {
                    A: "Angular",
                    B: "jQuery",
                    C: "Vue.js"
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