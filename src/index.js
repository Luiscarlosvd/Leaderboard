import './style.css';
import ScoreList from './modules/scores.js';

const containerList = document.querySelector('.scores-container');
const scoresList = new ScoreList(containerList);

scoresList.displayScores();

const formAddScore = document.querySelector('#addScore');
const nameScore = document.querySelector('#nameScore');
const scoreValue = document.querySelector('#scoreValue');

formAddScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const scoreItem = {
    name: nameScore.value,
    score: scoreValue.value,
  };
  scoresList.addScore(scoreItem);
  scoresList.displayScores();
  nameScore.value = '';
  scoreValue.value = '';
});