export default {
    state: {
        profile: {
            username: "dorberana",
            fullName: "Drothy Mae Berana",
        },

        items: [
            {
                question: "Question 1",
                choices: {
                    A: "Choice 1",
                    B: "Choice 2",
                    C: "Choice 3"
                },
                correct: "A"
            },
          
            {
            question: "Question 2",
            choices: {
                A: "Choice 1",
                B: "Choice 2",
                C: "Choice 3"
            },
            correct: "B"
             },
          
          
            {
            question: "Question 3",
            choices: {
                A: "Choice 1",
                B: "Choice 2",
                C: "Choice 3"
            },
            correct: "B"
             },

           {
            question: "Question 4",
            choices: {
                A: "Choice 1",
                B: "Choice 2",
                C: "Choice 3"
            },
            correct: "B"
             },
 
          {
            question: "Question 5",
            choices: {
                A: "Choice 1",
                B: "Choice 2",
                C: "Choice 3"
            },
            correct: "B"
             },
          
          {
            question: "Question 6",
            choices: {
                A: "Choice 1",
                B: "Choice 2",
                C: "Choice 3"
            },
            correct: "B"
             },
          
          {
            question: "Question 7",
            choices: {
                A: "Choice 1",
                B: "Choice 2",
                C: "Choice 3"
            },
            correct: "B"
             },
          
          {
            question: "Question 8",
            choices: {
                A: "Choice 1",
                B: "Choice 2",
                C: "Choice 3"
            },
            correct: "B"
             },
          
          {
            question: "Question 9",
            choices: {
                A: "Choice 1",
                B: "Choice 2",
                C: "Choice 3"
            },
            correct: "B"
             },
          {
            question: "Question 10",
            choices: {
                A: "Choice 1",
                B: "Choice 2",
                C: "Choice 3"
            },
            correct: "B"
             },
          
          
          
          
          
 
          
          
        ]
    },

  


    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};
