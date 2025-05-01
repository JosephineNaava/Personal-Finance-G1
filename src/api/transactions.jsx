// import apiClient from './apiClient';
import { mockTransactions } from '../data/mockTransactions';

// Fetch transactions with optional filtering
export const fetchTransactions = async (filters = {}) => {
  // In Phase 2, we use mock data with filtering
  let results = [...mockTransactions];
  
  // Apply filters if provided
  if (filters.category) {
    results = results.filter(t => t.category === filters.category);
  }
  
  if (filters.type) {
    results = results.filter(t => t.type === filters.type);
  }
  
  if (filters.dateRange) {
    const [start, end] = filters.dateRange;
    results = results.filter(t => t.date >= start && t.date <= end);
  }
  
  return results;
  
  // In Phase 3, we'll replace with:
  // return apiClient.get('/transactions', { params: filters });
};

/*
Filtering Logic:
1. Starts with all transactions
2. Applies each filter in sequence
3. Returns filtered array
4. Matches what real API will do later
*/