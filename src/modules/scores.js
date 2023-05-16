const displayScores = (arrayScores, container) => {
    if (localStorage.getItem('localData') === null) {
        localStorage.setItem('localData', JSON.stringify([]));
    }
    container.innerHTML = '';
    arrayScores.forEach((score) => {
        container.innerHTML += 
            `
            <li class="individual-scores">
                <h3 class="title" >${score.user}</h3>
                <p>${score.score}</p> 
            </li>
            `;
    });
}

export default displayScores;