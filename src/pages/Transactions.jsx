import useTransactions from "@/hooks/useTransactions"
import { Skeleton } from "@/components/ui/skeleton";


export default function Transactions() {
  const { transactions, isLoading, error } = useTransactions();
    
  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-[200px]" />
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-16 w-full" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-lg">
        Failed to load transactions. Refresh or try later.
      </div>
    );
  }


    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
        <p className="text-gray-600">
          View and manage all your financial transactions in one place.
        </p>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">

              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                </tr>
              </thead>

              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map(tx => (

                <tr key = {tx.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{tx.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">{tx.type}</td>

                <td className={ `px-6 py-4 whitespace-nowrap text-sm text-gray-500 
                      ${tx.type === 'income' ? 'text-green-600' : 'text-red-600'}`}> 
                      {tx.type === 'income' ? '+' : '-'}${tx.amount.toFixed(2)}
                </td>

                </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }