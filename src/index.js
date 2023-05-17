import './style.css';
import ScoreList from './modules/scores.js';

const containerList = document.querySelector('.scores-container');

const formAddScore = document.querySelector('#addScore');
const nameScore = document.querySelector('#nameScore');
const scoreValue = document.querySelector('#scoreValue');

const error = document.createElement('h4');
error.textContent = 'Error Trying to connect API';
error.style.color = 'red';

const errorContainer = document.querySelector('.error');


const fetchScores = async () => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/basketball/scores/');
    const data = await response.json();
    ScoreList(data.result, containerList);
  } catch {
    alert('Error trying to connect with the API');
    errorContainer.appendChild(error);
  }
};

fetchScores();

const postScore = async (name, score) => {
  try {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/basketball/scores/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: name,
        score,
      }),
    });
    const result = await response.json();

    if (result) {
      fetchScores();
    }
  } catch {
    alert('Error trying to add a score to the API');
    error.textContent = 'Error trying to add a score to the API';
    errorContainer.appendChild(error);
  }
};

formAddScore.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameScore.value;
  const score = scoreValue.value;
  postScore(name, score);
  fetchScores();
  nameScore.value = '';
  scoreValue.value = '';
});

const refresh = document.querySelector('#refresh');

refresh.addEventListener('click', fetchScores);