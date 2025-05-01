
import { mockTransactions } from '../data/mockTransactions';


export const fetchTransactions = async (filters = {}) => {
  
  let results = [...mockTransactions];
  
  
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
  
  
};

