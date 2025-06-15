import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function runTests() {
  try {
    
    const postRes = await axios.get(`${BASE_URL}/posts/1`);
    console.log('\nGET /posts/1');
    console.assert(postRes.status === 200, 'Status should be 200');
    console.assert(postRes.data.id === 1, 'Post ID should be 1');

   
    const userRes = await axios.get(`${BASE_URL}/users/2`);
    console.log('\nGET /users/2');
    console.assert(userRes.status === 200, 'Status should be 200');
    console.assert(userRes.data.username, 'User should have a username');

   
    const newPost = {
      title: 'Test Post',
      body: 'This is a test post',
      userId: 1,
    };
    const postCreateRes = await axios.post(`${BASE_URL}/posts`, newPost);
    console.log('\nPOST /posts');
    console.assert(postCreateRes.status === 201, 'Status should be 201');
    console.assert(postCreateRes.data.title === newPost.title, 'Title should match');

  
    const commentsRes = await axios.get(`${BASE_URL}/comments`, {
      params: { postId: 1 },
    });
    console.log('\nGET /comments postId=1');
    console.assert(Array.isArray(commentsRes.data), 'Comments should be an array');
    console.assert(commentsRes.data.length > 0, 'Should return at least one comment');

   
    const newComment = {
      postId: 1,
      name: 'Test User',
      email: 'test@example.com',
      body: 'Test comment content',
    };
    const commentCreateRes = await axios.post(`${BASE_URL}/comments`, newComment);
    console.log('\nPOST /comments');
    console.assert(commentCreateRes.status === 201, 'Status should be 201');
    console.assert(commentCreateRes.data.email === newComment.email, 'Email should match');

    console.log('\n All tests passed.');
  } catch (err) {
    console.error(' Test failed:', err.message);
  }
}

runTests();