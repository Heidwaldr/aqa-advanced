const axios = require('axios');
const { fetchInvalidUrl } = require('../src/task1');

jest.mock('axios');

describe('fetchInvalidUrl', () => {
  it('повертає помилку 404', async () => {
    axios.get.mockRejectedValue({
      response: { status: 404, statusText: 'Not Found' }
    });

    const result = await fetchInvalidUrl();
    expect(result).toBe('Error: 404 Not Found');
  });
});