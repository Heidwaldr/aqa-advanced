const axios = require('axios');

async function getData(url) {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    return `Request failed: ${err.message}`;
  }
}

module.exports = { getData };