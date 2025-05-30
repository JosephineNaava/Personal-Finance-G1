import { TransactionItem } from "./TransactionItem";

export function TransactionList({ transactions, onItemClick }) {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
        <p className="text-gray-500">No transactions found</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {transactions.map((tx) => (
        <TransactionItem 
          key={tx.id} 
          transaction={tx} 
          onClick={onItemClick}
        />
      ))}
    </div>
  );
}

// // import useTransactions from "@/hooks/useTransactions";


// export function TransactionList({ transactions }) {
//     // const { transactions, isLoading, error } = useTransactions();
    
//     // if (isLoading) return <div className="p-4">Loading Transaction...</div>
//     // if (error) return <div className="p-4 text-red-500">Error...</div>


//     if (transactions.length === 0) {
//       return <p className="text-gray-500 py-4">No transactions yet!</p>;
//     }
  
//     return (
//       <div className="space-y-3">
//         {transactions.map((tx) => (
//           <transactionItem key={tx.id} transaction={tx} />
//         ))}
//       </div>
//     );
//   }