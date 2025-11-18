import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to ${config.url}`);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error.response?.data || error.message);
  }
);

export const notesAPI = {
  // Get all notes
  getAllNotes: async () => {
    try {
      const response = await api.get('/notes');
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Get note by ID
  getNoteById: async (id) => {
    try {
      const response = await api.get(`/notes/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Create new note
  createNote: async (noteData) => {
    try {
      const response = await api.post('/notes', noteData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Update note
  updateNote: async (id, noteData) => {
    try {
      const response = await api.put(`/notes/${id}`, noteData);
      return response;
    } catch (error) {
      throw error;
    }
  },

  // Delete note
  deleteNote: async (id) => {
    try {
      const response = await api.delete(`/notes/${id}`);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default api;