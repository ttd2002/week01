/*Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!
Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy*/
var Dolphins_Score = (97 + 112 + 101) / 3
var Koalas_Score = (109 + 95 + 123) / 3
console.log(Dolphins_Score, Koalas_Score)
var reqScoreDol = Dolphins_Score >= 100;
var reqScoreKoa = Koalas_Score >= 100;
if (Dolphins_Score > Koalas_Score && reqScoreDol) {
    console.log("team Dolphins win!");
} else if (Dolphins_Score < Koalas_Score && reqScoreKoa) {
    console.log("team Koalas win!");
} else if (Dolphins_Score == Koalas_Score && reqScoreKoa && reqScoreDol) {
    console.log("draw");
} else {
    console.log("no team win");
}