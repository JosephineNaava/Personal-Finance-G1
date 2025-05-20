export function TransactionItem({ transaction, onClick }) {
    return (
      <div 
        className="flex justify-between items-center py-3 px-4 hover:bg-gray-50 cursor-pointer"
        onClick={() => onClick?.(transaction)}
      >
        <div className="flex-1">
          <div className="flex gap-2 items-baseline">
            <p className="font-medium">{transaction.description}</p>
            <span className="text-xs text-gray-500">{transaction.category}</span>
          </div>
          <p className="text-sm text-gray-500">{transaction.date}</p>
        </div>
        <p className={`font-medium ${
          transaction.type === 'income' ? 'text-green-600' : 'text-red-600'
        }`}>
          {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
        </p>
      </div>
    );
  }

// export function TransactionItem({ transaction }) {
//     return (
//       <div className="flex justify-between py-2 border-b">
//         <div>
//           <p className="font-medium">{transaction.description}</p>
//           <p className="text-sm text-gray-500">
//             {transaction.date} • {transaction.category}
//           </p>
//         </div>
//         <p className={transaction.type === "income" ? "text-green-600" : "text-red-600"}>
//           {transaction.type === "income" ? "+" : "-"}${transaction.amount}
//         </p>
//       </div>
//     );
//   }