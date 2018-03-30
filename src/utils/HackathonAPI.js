const api = 'http://localhost:8080';

export const getTeamProgress = () =>
  fetch(`${api}/statistics/progress`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => data);
