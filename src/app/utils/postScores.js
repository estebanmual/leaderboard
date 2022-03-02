export default async function addScoreToArray(nameInput, scoreInput) {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/CFq0hC1cbHxChD2F2oRZ/scores/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: nameInput,
      score: scoreInput,
    }),
  });
}
