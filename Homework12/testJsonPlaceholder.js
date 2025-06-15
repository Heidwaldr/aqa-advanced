import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

async function runTests() {
  try {
  
    const getPosts = await axios.get(`${BASE_URL}/posts`);
    console.log('GET /posts status:', getPosts.status);
    console.assert(getPosts.status === 200, 'GET /posts: Status code is not 200');
    console.assert(Array.isArray(getPosts.data), 'GET /posts: Data is not an array');

 
    const getPost = await axios.get(`${BASE_URL}/posts/1`);
    console.log('GET /posts/1 status:', getPost.status);
    console.assert(getPost.status === 200, 'GET /posts/1: Status code is not 200');
    console.assert(getPost.data.id === 1, 'GET /posts/1: Wrong post ID');

    
    const newPostData = {
      title: 'Test Title',
      body: 'Test body content',
      userId: 1
    };
    const createPost = await axios.post(`${BASE_URL}/posts`, newPostData);
    console.log('POST /posts status:', createPost.status);
    console.assert(createPost.status === 201, 'POST /posts: Status code is not 201');
    console.assert(createPost.data.title === newPostData.title, 'POST /posts: Title mismatch');

   
    const getUsers = await axios.get(`${BASE_URL}/users`);
    console.log('GET /users status:', getUsers.status);
    console.assert(getUsers.status === 200, 'GET /users: Status code is not 200');
    console.assert(getUsers.data.length > 0, 'GET /users: Empty users list');

   
    const newComment = {
      name: "Test comment",
      email: "test@example.com",
      body: "This is a test comment",
      postId: 1
    };
    const createComment = await axios.post(`${BASE_URL}/comments`, newComment);
    console.log('POST /comments status:', createComment.status);
    console.assert(createComment.status === 201, 'POST /comments: Status code is not 201');
    console.assert(createComment.data.email === newComment.email, 'POST /comments: Email mismatch');

    console.log('\n✅ All tests passed!');
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

runTests();