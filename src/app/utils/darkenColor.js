const tableRows = document.getElementsByTagName('tr');
const tinycolor = require('tinycolor2');

function darkenColor() {
  for (let i = 0; i < tableRows.length; i += 1) {
    if (i <= 7) {
      const darkPercentage = i * 5;
      tableRows[i].style.backgroundColor = tinycolor('#339AF7').darken(darkPercentage).toString();
    } else if (i > 5) {
      tableRows[i].style.backgroundColor = tinycolor('#339AF7').darken(35).toString();
    }
  }
}

export default darkenColor;