const displayScores = (arrayScores, container) => {
  container.innerHTML = '';
  arrayScores.forEach((score) => {
    container.innerHTML
            += `
            <li class="individual-scores box-shadow">
                <h3 class="title" >${score.user}</h3>
                <p>${score.score}</p> 
            </li>
            `;
  });
};

export default displayScores;