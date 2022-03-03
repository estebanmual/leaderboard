import trophy from '../../assets/trophy.svg';
import trophy1 from '../../assets/trophy1.svg';
import trophy2 from '../../assets/trophy2.svg';
import trophy3 from '../../assets/trophy3.svg';

const scoresSection = document.querySelector('.scores-table');

export default function displayScores(arrayOfScores) {
  arrayOfScores.forEach((element, index) => {
    const tableRow = document.createElement('tr');
    const userName = (element.user).toUpperCase();
    const userScore = element.score;
    let trophyImg = '';
    switch (index) {
      case 0:
        trophyImg = trophy;
        break;
      case 1:
        trophyImg = trophy1;
        break;
      case 2:
        trophyImg = trophy2;
        break;
      default:
        trophyImg = trophy3;
    }
    tableRow.innerHTML = `
    <td>
      <span>
        <img src="${trophyImg}"/>
        <h3>${userName}</h3>
      </span>
      <span>
        <p>${userScore}</p>
        <p>POINTS</p>
      </span>
    </td>
    `;
    scoresSection.appendChild(tableRow);
  });
}