export default {
    state: {
        profile: {
            username: "KateRochelleOnido",
            fullName: "Kate Rochelle Onido",
        },

        items: [
            {
                question: "Even if you were never a Scout, you know you should always be prepared. You decide to pack some essentials just in case. What kind of bag do you reach for?",
                choices: {
                    A: "A backpack (for optimum mobility)",
                    B: "A suitcase (for optimum capacity)",
                    C: "A gym bag (for both mobility and capacity)"
                },
                correct: "A"
            },
          
            {
                question: "Weaving around cars and zooming past zombies, your heart pounding in your throat, you manage to get about 20km before the city streets, sidewalks and masses of cars disappear, and you find yourself on a country road. The road is more or less clear for a while, but then you notice a major traffic jam up ahead. You can’t see what’s causing it. Without sidewalks and side streets, you’ll have to go through the cars to keep cycling onward. Do you…",
                choices: {
                    A: "Stay on the road but power-pedal as fast as possible.",
                    B: "Approach the traffic jam and find someone to ask about the cause of the clog.",
                    C: "Ditch the bike and walk through the forest for cover – who knows what’s up ahead?"
                },
                correct: "C"
            },

            {
                question: "The first step in surviving the undead is understanding them. What do zombies want more than anything else?",
                choices: {
                    A: "To drink human blood",
                    B: "To eat human flesh",
                    C: "To become human again"
                },
                correct: "B"
            },

            {
                question: "Now you’re out a bike, the sun is sinking fast, and there’s no chance of making it to the lake house before dark. You’re mentally debating the pros and cons of finding shelter vs walking through the night, when… you realise a zombie is headed right for you! There’s no way to avoid or outrun it – you’re going to have to neutralise this walking corpse before it can kill or infect you. What do you do?",
                choices: {
                    A: "Shoot it in the head",
                    B: "Stab it in the head with a knife",
                    C: "Ram a sharpened stick through its eye"
                },
                correct: "C"
            },

            {
                question: "Now for some basic zombie science: What is the most common route of infection which results in a person turning into a zombie?",
                choices: {
                    A: "Getting bitten by a zombie",
                    B: "Being coughed/sneezed on by a zombie",
                    C: "Eating/drinking after a zombie"
                },
                correct: "A"
            },

            {
                question: "Location, location, location. What is perhaps the worst place you can be during a zombie apocalypse?",
                choices: {
                    A: "In the forest",
                    B: "In a town",
                    C: "In a city"
                },
                correct: "C"
            },

            {
                question: "As you leave your apartment building, your fears are confirmed: traffic is bumper-to-bumper with no sign of movement. There’s no way you can take your car (good thing you didn’t pack a suitcase!). How should you proceed?",
                choices: {
                    A: "Head to the train station and try my luck catching the next one out.",
                    B: "Grab my bicycle and pedal as fast as I can out of here.",
                    C: "Attempt to take my car – if I can just get past the city traffic, I’ll be golden."
                },
                correct: "B"
            },

            {
                question: "As it turns out, a dirt bike is the ideal means of travel. You’re able to follow the road, cautiously off-roading when you need to avoid a clump of stranded cars. You make solid progress for a couple of hours. The dirt bike runs out of gas just a few kilometres before the lake, so you abandon it to finish the journey on foot. As you make your way through the forest bordering the lake, something rustles in a bush up ahead. You stop, bracing yourself for a zombie, but instead a feral-looking dog emerges. It must also be terrified and fleeing the undead. You almost breathe a sigh of relief, but then the dog begins to growl, the hair on its back standing on end. Uh oh. What should you do?",
                choices: {
                    A: "Turn tail and run away!",
                    B: "Scream at the dog and make eye contact to show it I’m the boss.",
                    C: "Stand tall, stay calm, and back away slowly while talking to it in soothing tones."
                },
                correct: "C"
            },

            {
                question: "After hastily stuffing the bag with food, water and a few first-aid supplies, it’s almost full. You can only fit one more item: What should it be?",
                choices: {
                    A: "A knife",
                    B: "A jacket",
                    C: "My smartphone"
                },
                correct: "A"
            },

            {
                question: "Bad news: You live in an apartment in the middle of a large city, and the unthinkable is happening. Zombies are taking over. Societal order is disintegrating, and you know you need to get out of the city and away from other people – both living and dead. What’s the safest place you can think of heading to?",
                choices: {
                    A: "A mountaintop",
                    B: "An island",
                    C: "I’m staying put – I’ll just barricade myself in!"
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