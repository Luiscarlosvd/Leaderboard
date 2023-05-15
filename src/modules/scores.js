export default class scoreList {
  constructor(container) {
    this.container = container;
    this.scores = [];
  }

  addScore(score) {
    this.scores.push(score);
    localStorage.setItem('localData', JSON.stringify(this.scores));
  }

  displayScores() {
    if (localStorage.getItem('localData') === null) {
      localStorage.setItem('localData', JSON.stringify([]));
    }
    this.scores = JSON.parse(localStorage.getItem('localData'));
    this.container.innerHTML = '';
    this.scores.forEach((score) => {
      this.container.innerHTML
            += `
            <li class="individual-scores">
                <h3 class="title" >${score.name}</h3>
                <p>${score.score}</p> 
            </li>
            `;
    });
  }
}