import axios from 'axios';
import { mockTransactions, mockSummary } from '../data/mockData';

// Create configured Axios instance
const apiClient = axios.create({
  baseURL: 'https://api.financevis.com/v1', // Placeholder for real API
  headers: {
    'Content-Type': 'application/json'
  }
});

// Mock interceptor - will be removed when real API is ready
apiClient.interceptors.response.use(
  response => response,
  error => {
    // For now, return mock data for all requests
    const isTransactionsRequest = error.config.url.includes('transactions');
    return Promise.resolve({ 
      data: isTransactionsRequest ? mockTransactions : mockSummary 
    });
  }
);

export default apiClient;

/*
API Client Features:
1. Base configuration in one place
2. Request/response interceptors
3. Currently mocks all responses
4. Easy to switch to real API later
*/