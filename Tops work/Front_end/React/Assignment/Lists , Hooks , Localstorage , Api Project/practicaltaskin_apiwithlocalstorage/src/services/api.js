const API_BASE_URL = '';

// Generic API request function
const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw new Error(`Network Error: ${error.message}`);
  }
};

// User API operations
export const userAPI = {
  // Get all users
  getAll: () => apiRequest('/users'),

  // Get user by ID
  getById: (id) => apiRequest(`/users/${id}`),

  // Create new user
  create: (userData) => apiRequest('/users', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),

  // Update user (PUT - replaces entire resource)
  update: (id, userData) => apiRequest(`/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(userData),
  }),

  // Patch user (PATCH - partial update)
  patch: (id, userData) => apiRequest(`/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(userData),
  }),

  // Delete user
  delete: (id) => apiRequest(`/users/${id}`, {
    method: 'DELETE',
  }),

  // Login user (check credentials)
  login: async (email, password) => {
    const users = await apiRequest('/users');
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return user;
  },

  // Check if user exists by email
  checkEmailExists: async (email) => {
    const users = await apiRequest('/users');
    return users.some(u => u.email === email);
  },
};

// Post API operations
export const postAPI = {
  // Get all posts
  getAll: () => apiRequest('/posts'),

  // Get post by ID
  getById: (id) => apiRequest(`/posts/${id}`),

  // Get posts by user ID
  getByUserId: (userId) => apiRequest(`/posts?userId=${encodeURIComponent(String(userId))}`),

  // Create new post
  create: (postData) => apiRequest('/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
  }),

  // Update post (PUT - replaces entire resource)
  update: (id, postData) => apiRequest(`/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(postData),
  }),

  // Patch post (PATCH - partial update)
  patch: (id, postData) => apiRequest(`/posts/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(postData),
  }),

  // Delete post
  delete: (id) => apiRequest(`/posts/${id}`, {
    method: 'DELETE',
  }),
};

export default {
  userAPI,
  postAPI,
}; 