import displayScores from './displayScores.js';
import darkenColor from './darkenColor.js';

const getScoresArray = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DwwBOxLq8ikq9yEiIlYo/scores/');
  const dataObj = await response.json();
  const dataArr = dataObj.result;
  const dataArrOrd = dataArr.sort(((a, b) => b.score - a.score));
  displayScores(dataArrOrd);
  darkenColor();
};

export default getScoresArray;
