import useSWR from 'swr';
import { fetchSummary } from '../api/summary';
import useStore from '../store/useStore';

const useSummary = () => {
  const { setSummary, setIsLoading, setError } = useStore();
  
  const { data, error, isLoading } = useSWR(
    'summary', // Single cache key
    fetchSummary,
    {
      onSuccess: (data) => {
        setSummary(data);
        setIsLoading(false);
        setError(null); // clear any previous errors
      },
      onError: (error) => {
        setError(error);
        setIsLoading(false);

      }
    }
  );
  
  return {
    summary: data || null,
    isLoading,
    error
  };
};

export default useSummary;

/*
Key Differences from useTransactions:
1. No filters needed
2. Simpler cache key
3. Same store integration pattern
*/