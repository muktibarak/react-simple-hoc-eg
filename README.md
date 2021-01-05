# react-n5uka3

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-n5uka3)

This is a simple example of how hoc can be used in React to make the react components highly compositional. We have players with their scores needed to display. I did not bother to organize this in table however, results are displayed. Following were the steps taken to complete this example:
1. create mock players and mock scores (Players.js and Scores.js)
2. Create PlayerList.js and ScoreList.js to simply process the result to display.
3. Create HOC.js to manage the state and define HocComponent that renders the data whenever we use HOC() function throughout the application.
4. HOC() has been used on APP.js to display the PlayerList while another HOC() has been used in PlayerList.js to display the Scores.
