import useSWR from 'swr';
import { fetchTransactions } from '../api/transactions';
import useStore from '../store/useStore';

const useTransactions = () => {
  // Get current filters from store
  const { filters, setTransactions, setIsLoading, setError } = useStore();
  
  // Use SWR for data fetching
  const { data, error, isLoading } = useSWR(
    ['transactions', filters], // Cache key includes filters
    () => fetchTransactions(filters),
    {
      onSuccess: (data) => {
        // Update store when data loads
        setTransactions(data);
        setIsLoading(false);
      },
      onError: (error) => {
        // Update store on error
        setError(error);
        setIsLoading(false);
      }
    }
  );
  
  return {
    transactions: data || [],
    isLoading,
    error
  };
};

export default useTransactions;

/*
SWR Hook Features:
1. Automatic caching
2. Revalidation on focus
3. Error handling
4. Loading states
5. Updates Zustand store
*/