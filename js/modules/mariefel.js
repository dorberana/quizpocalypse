export default {
    state: {
        profile: {
            username: "Mapelyaa",
            fullName: "Mariefel J. Bermido",
        },

        items: [
            {
                question: "Which of the following are ways living humans can be infected by zombies?",
                choices: {
                    A: "Zombie bite",
                    B: "Ingestin zombie flesh",
                    C: "Brushing open wounds against zombies",
                    D: "All of the Above"
                },
                correct: "D"
            },
            {
                question: " In “The Walking Dead” TV series, what do the survivors theorize most attracts walkers to humans?",
                choices: {
                    A: "Heat",
                    B: "Movement",
                    C: "Smell",
                    D: "Sound"
                },
                correct: "C"
            }, 
            {
                question: "According to the “Zombie Survival Guide,” which of the following are zombies NOT capable of doing?",
                choices: {
                    A: "Climbing ladders",
                    B: "Climbingstairs",
                    C: "Walkingunderwater",
                    D: "Communicating among one another"
                },
                correct: "A"
            }, 
            {
                question: "What is the only way to kill a zombie?",
                choices: {
                    A: "Drive a stake through its heart",
                    B: "Decapitatethezombi",
                    C: "Damage or destroy the brain",
                    D: "Decapitate, then completely burn the zombie to ash"
                },
                correct: "C"
            }, 
            {
                question: "What is the first thing you must do after the dead have begun to walk the earth?",
                choices: {
                    A: "Address wounds and injuries",
                    B: "Find water",
                    C: "Remain calm, as paralyzing fear or panic means death",
                    D: "Find other survivors"
                },
                correct: "C"
            }, 
            {
                question: "According to the “Zombie Survival Guide,” what is the best possible means of transportation for fleeing an infected area?",
                choices: {
                    A: "An M-1 Abrams tank",
                    B: "Ahorse",
                    C: "Afour-wheeldrivetruckorall-terrainvehicle",
                    D: "A motorcycle"
                },
                correct: "D"
            }, 
            {
                question: "According to the “Zombie Survival Guide,” what is the best compact anti-zombie weapon on earth?",
                choices: {
                    A: "A Sledgehammer",
                    B: "A Samuraisword",
                    C: "A Trench Spike",
                    D: "A Chainsaw"
                },
                correct: "C"
            }, 
            {
                question: "What is the best possible edged weapon you could choose to defend yourself again zombies with?",
                choices: {
                    A: "Double-Handed Swords",
                    B: "Civilian Ax",
                    C: "Single-Handed Long Sword",
                    D: "Foils or Rapiers"
                },
                correct: "A"
            }, 
            {
                question: "Which of the following alternative weapons is the best way to completely destroy a zombie, but poses an equal risk to the living as to the dead?",
                choices: {
                    A: "Poison",
                    B: "Sulfuric Acid",
                    C: " Electrocution",
                    D: "Zoological Warfare"
                },
                correct: "B"
            }, 
            {
                question: " According to the “Zombie Survival Guide,” which of the following is a cheap and effective way to kill multiple zombies at once with fire?",
                choices: {
                    A: "Dousing",
                    B: "Blowtorch",
                    C: "Molotov Cocktails",
                    D: "Falmethrower"
                },
                correct: "c"
            }, 
        ]
    },



    getters: {
        profile: state => state.profile,
        items  : state => state.items
    },

    namespaced: true
};