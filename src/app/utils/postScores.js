export default async function addScoreToArray(nameInput, scoreInput) {
  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/DwwBOxLq8ikq9yEiIlYo/scores/', {
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
