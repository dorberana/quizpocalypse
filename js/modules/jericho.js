export default {
    state: {
        profile: {
            username: "JerichoValladolid",
            fullName: "Jericho Valladolid",
        },

        items: [
            {
                question: "Question 1, What is the capital of Philippines?",
                choices: {
                    A: "Manila",
                    B: "Cebu",
                    C: "Davao"
                },
                correct: "A"

        
            },

            {
                question: "Question 2, What is the largest island in the philippines?",
                choices: {
                    A: "Mindanao",
                    B: "Luzon",
                    C: "Visayas"
                },
                correct: "B"

        
            },

            {
                question: "Question 3, What is the Oldest city of the philippines?",
                choices: {
                    A: "Cebu",
                    B: "Vigan",
                    C: "Quezon City"
                },
                correct: "A"

        
            },

            {
                question: "Question 4, Which province is located near Taiwan ans north of the province of Ilocos and Cagayan?",
                choices: {
                    A: "Ilocos Norte",
                    B: "Isabela",
                    C: "Batanes"
                },
                correct: "C"

        
            },
 
            {
                question: "Question 5, Smallest province in the philippines in terms of land area?",
                choices: {
                    A: "Batanes",
                    B: "Catanduanes",
                    C: "Aklan"
                },
                correct: "A"

        
            },

            {
                question: "Question 6, What province is nearest to Sabah, Malaysia?",
                choices: {
                    A: "Tawi-Tawi",
                    B: "Boracay",
                    C: "Palawan"
                },
                correct: "A"

        
            },

            {
                question: "Question 7,What city is known as the Summer Capital of the Philippines?",
                choices: {
                    A: "Baguio",
                    B: "Boracay",
                    C: "Coron"
                },
                correct: "A"

        
            },

            {
                question: "Question 8,How many provinces are there in Philippines",
                choices: {
                    A: "81",
                    B: "82",
                    C: "84"
                },
                correct: "A"

        
            },

            {
                question: "Question 9,The Philippines is part of the Pacific Ring of Fire. Which of the following features are typical of this belt?",
                choices: {
                    A: "Typhoon",
                    B: "Tsunami",
                    C: "Earthquake"
                },
                correct: "C"

        
            },

            {
                question: "Question 10,The Barasoain Church is located in which Philippine province?",
                choices: {
                    A: "Bulacan",
                    B: "Cebu",
                    C: "Rizal"
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
