import displayScores from './displayScores.js';

const getScoresArray = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CFq0hC1cbHxChD2F2oRZ/scores/');
  const dataObj = await response.json();
  const dataArr = dataObj.result;
  const dataArrOrd = dataArr.sort(((a, b) => b.score - a.score));
  displayScores(dataArrOrd);
};

export default getScoresArray;
