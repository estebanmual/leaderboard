import getScoresArray from './utils/getScores.js';
import addScoreToArray from './utils/postScores.js';

const refreshBtn = document.querySelector('.refresh-button');
const scoresSection = document.querySelector('.scores-table');

window.addEventListener('load', () => {
  getScoresArray();
});

refreshBtn.addEventListener('click', () => {
  scoresSection.innerHTML = '';
  getScoresArray();
});

const submitBtn = document.querySelector('.submit-button');
const nameInput = document.querySelector('.name-input');
const scoreInput = document.querySelector('.score-input');
submitBtn.addEventListener('click', () => {
  addScoreToArray(nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
});
