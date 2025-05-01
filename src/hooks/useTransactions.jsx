import useSWR from 'swr';
import { fetchTransactions } from '../api/transactions';
import useStore from '../store/useStore';

const useTransactions = () => {
  
  const { filters, setTransactions, setIsLoading, setError } = useStore();
  
  
  const { data, error, isLoading } = useSWR(
    ['transactions', filters], 
    () => fetchTransactions(filters),
    {
      onSuccess: (data) => {
        
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
