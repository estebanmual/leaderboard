const scoresSection = document.querySelector('.scores-table');

export default function displayScores(arrayOfScores) {
  arrayOfScores.forEach((element) => {
    const tableRow = document.createElement('tr');
    const tableCell = document.createElement('td');
    const userName = document.createElement('p');
    const userScore = document.createElement('p');
    userName.textContent = element.user;
    userScore.textContent = element.score;
    tableCell.appendChild(userName);
    tableCell.appendChild(userScore);
    tableRow.appendChild(tableCell);
    scoresSection.appendChild(tableRow);
  });
}