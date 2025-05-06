export function TransactionItem({ transaction }) {
    return (
      <div className="flex justify-between py-2 border-b">
        <div>
          <p className="font-medium">{transaction.description}</p>
          <p className="text-sm text-gray-500">
            {transaction.date} • {transaction.category}
          </p>
        </div>
        <p className={transaction.type === "income" ? "text-green-600" : "text-red-600"}>
          {transaction.type === "income" ? "+" : "-"}${transaction.amount}
        </p>
      </div>
    );
  }