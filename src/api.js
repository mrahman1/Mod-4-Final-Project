const API_ROOT = 'http://localhost:3000/users/'

const headers = {
  'Content-Type': 'application/json',
  'Accepts': 'application/json'
}

login = data => {
  fetch (API_ROOT,{
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};
