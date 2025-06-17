const axios = require('axios');

async function fetchWithHeadersAndParams() {
  const config = {
    headers: {
      'x-custom-header': 'TestHeader'
    },
    params: {
      userId: 1
    }
  };
  return axios.get('https://jsonplaceholder.typicode.com/posts', config);
}

module.exports = { fetchWithHeadersAndParams };