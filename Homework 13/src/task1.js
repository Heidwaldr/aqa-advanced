const axios = require('axios');

async function fetchInvalidUrl() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/invalid-endpoint');
    return response.data;
  } catch (error) {
    if (error.response) {
      return `Error: ${error.response.status} ${error.response.statusText}`;
    } else if (error.request) {
      return 'Error: No response received';
    } else {
      return `Error: ${error.message}`;
    }
  }
}

module.exports = { fetchInvalidUrl };