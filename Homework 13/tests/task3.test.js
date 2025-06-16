const axios = require('axios');
const { getData } = require('../src/task3');

jest.mock('axios');

describe('getData', () => {
  it('повертає дані при успішному запиті', async () => {
    const mockData = { name: 'Test' };
    axios.get.mockResolvedValue({ data: mockData });

    const result = await getData('/success');
    expect(result).toEqual(mockData);
  });

  it('повертає повідомлення про помилку при збої', async () => {
    axios.get.mockRejectedValue(new Error('Internal Server Error'));

    const result = await getData('/fail');
    expect(result).toBe('Request failed: Internal Server Error');
  });
});