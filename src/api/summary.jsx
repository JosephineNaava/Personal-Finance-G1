import { mockSummary } from '../data/mockSummary';

// Fetch summary data
export const fetchSummary = async () => {
  // Currently using mock data
  return mockSummary;
  
  // In Phase 3:
  // return apiClient.get('/summary');
};

/*
Simple Data Fetch:
1. Directly returns mock data now
2. Will be replaced with API call later
3. Same function signature maintained
*/