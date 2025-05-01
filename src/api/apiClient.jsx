import axios from 'axios';
import { mockTransactions, mockSummary } from '../data/mockData';


const apiClient = axios.create({
  baseURL: 'https://api.financevis.com/v1', 
  headers: {
    'Content-Type': 'application/json'
  }
});

// Mock interceptor - will be removed when real API is ready
apiClient.interceptors.response.use(
  response => response,
  error => {
    
    const isTransactionsRequest = error.config.url.includes('transactions');
    return Promise.resolve({ 
      data: isTransactionsRequest ? mockTransactions : mockSummary 
    });
  }
);

export default apiClient;

