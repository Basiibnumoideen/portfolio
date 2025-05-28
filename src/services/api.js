
import axios from 'axios';

// Use Render backend URL in production, fallback to localhost for development
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactService = {
  submitContactForm: async (formData) => {
    try {
      const response = await api.post('/contact', formData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Network error occurred' };
    }
  },
};

export default api;
