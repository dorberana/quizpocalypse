## BSIT-3B | QuizPocalypse
Survive the QuizPocalypse, one question at a time!

### Installation
1. Log in to your GitHub account using a web browser.
2. ***Fork*** this repository to your **own account**.
3. Download and setup [**GitHub Desktop**](https://desktop.github.com/) and sign in with your GitHub account.
4. ***Clone*** your forked repository using **GitHub Desktop**.
5. Open the cloned repository in [**Visual Studio Code**](https://code.visualstudio.com).

### Contributing
1. Create a new `.js` file in the [**js/modules**](js) folder, with your first name as the file name (e.g. "john.js").
2. Add your quiz module, following the given format:

    ```javascript
    export default {
        state: {
            profile: {
                username: "your-github-username",
                fullName: "Your Full Name",
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
            ]
        },



        getters: {
            profile: state => state.profile,
            items  : state => state.items
        },

        namespaced: true
    };
    ```

   You can also look at [arvic.js](js/modules/arvic.js) for reference.


3. Extend the `items` array to hold at least **10 multiple-choice questions** about
   *technology*, *application development*, or *zombies*. 
   
   Each item object should have a `question`, `choices`, and `correct` properties
   as shown below:

   ```javascript
   {
       question: "Question 1",
       choices: {
           A: "Choice 1",
           B: "Choice 2",
           C: "Choice 3"
       },
       correct: "A"
   }
   ```

4. Import your module to the [**store.js**](js/store.js) file.
   
   For example:

   ```javascript
   // modules
   import arvic from './modules/arvic.js';
   
   // import your .js file here (e.g. import john from './modules/john.js')
   import john from './modules/john.js';
   
   const store = Vuex.createStore({
       modules: {
           arvic,
   
           // include your module here (e.g. john)
           john,
       }
   });
   
   export default store;
   ```

### Testing
Open the project in
[**Live Server**](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
or
[**http-server**](https://www.npmjs.com/package/http-server)
to test your quiz,
as directly opening `index.html` in the browser may result in a
[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) error.

#### To use [**Live Server**](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer):
1. Install the Live Server extension for Visual Studio Code. To do this, open Visual Studio Code, click on the Extensions button on the left side panel, and search for "Live Server". Install the first result by Ritwick Dey. 
2. Open the HTML file you want to view in Live Server. 
3. Right-click on the HTML file in the Visual Studio Code editor and select "Open with Live Server" from the context menu. 
4. This should launch your default web browser and display the HTML file you selected. 
   
   <small>
   Note: If you do not see the "Open with Live Server" option in the context menu, you may need to restart Visual Studio Code
   </small>

#### To use [**http-server**](https://www.npmjs.com/package/http-server):
1. Download and install [Node.js](https://nodejs.org/) if you haven't already.
2. Install http-server globally using the terminal with the command:
   ```
   npm install http-server -g
   ```
   or with elevated privilege by adding "sudo" for Mac:
   ```
   sudo npm install http-server -g
   ```
3. Navigate to the folder containing the `index.html` in the terminal.
4. Start the http-server with the command:
   ```
   http-server
   ```
5. Access the application by opening a web browser and entering the URL:
  <http://localhost:8080>.

### Submission
1. ***Commit*** and ***Push*** changes to your fork.
2. Make a ***Pull Request*** to the original repository.
