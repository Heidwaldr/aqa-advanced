const axios = require('axios');
const { fetchWithHeadersAndParams } = require('../src/task2');

jest.mock('axios');

describe('fetchWithHeadersAndParams', () => {
  it('надсилає правильні заголовки та параметри', async () => {
    axios.get.mockResolvedValue({ data: [] });

    await fetchWithHeadersAndParams();

    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts',
      expect.objectContaining({
        headers: { 'x-custom-header': 'TestHeader' },
        params: { userId: 1 }
      })
    );
  });
});