import { create } from 'zustand';

// Create our store with initial state and actions
const useStore = create((set) => ({
  // Initial state
  transactions: [],
  summary: null,
  filters: {
    category: null,
    type: null,
    dateRange: null
  },
  isLoading: false,
  error: null,

  // Actions to update state
  setTransactions: (transactions) => set({ transactions }),
  setSummary: (summary) => set({ summary }),
  setFilters: (filters) => set({ filters }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  
  // Special action to reset filters
  resetFilters: () => set({ 
    filters: {
      category: null,
      type: null,
      dateRange: null
    }
  })
}));

export default useStore;

/*
Zustand Explanation:
1. create() makes a new store
2. The function receives 'set' to update state
3. We define:
   - Initial state values
   - Actions that modify state
4. No need for providers - any component can use this hook
*/