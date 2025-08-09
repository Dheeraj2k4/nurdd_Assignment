import axios from 'axios';

// MockApi url
const BASE_URL = 'https://6896f0b5250b078c204085df.mockapi.io/';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method?.toUpperCase()} request to: ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('Response error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

/**
 * Fetch all brands from the API
 * @returns {Promise<Array>} Array of brand objects
 */
export const getBrands = async () => {
  try {
    const response = await api.get('/brands');
    console.log('API Response - Brands:', JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error('Error fetching brands:', error);
    throw new Error('Failed to fetch brands. Please check your connection and try again.');
  }
};

/**
 * Fetch a specific brand by ID
 * @param {string} id - Brand ID
 * @returns {Promise<Object>} Brand object
 */
export const getBrandById = async (id) => {
  try {
    const response = await api.get(`/brands/${id}`);
    console.log(`API Response - Brand ${id}:`, JSON.stringify(response.data, null, 2));
    return response.data;
  } catch (error) {
    console.error(`Error fetching brand ${id}:`, error);
    throw new Error('Failed to fetch brand details. Please try again.');
  }
};

export default api;
