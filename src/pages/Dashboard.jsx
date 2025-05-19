
import useSummary from "@/hooks/useSummary";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/reuse/Card";

export default function Dashboard() {
  const { summary, isLoading, error } = useSummary();

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-10 w-[200px]" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-lg">
        Failed to load dashboard data. Refresh or try later.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
      <Card title="Total Income">
        <p className="text-2xl font-semibold text-green-600">
          +${summary?.totalIncome?.toFixed(2) || "0.00"}
        </p>
         {/* <p className="text-sm text-gray-500 mt-1">This month</p> */}
      </Card>

      <Card title="Total Expenses">
        <p className="text-2xl font-semibold text-red-600">
          -${summary?.totalExpenses?.toFixed(2) || "0.00"}
         </p>
      </Card>

      <Card title="Net Balance">
        <p className="text-2xl font-semibold text-gray-900">
          ${summary?.netBalance?.toFixed(2) || "0.00"}
         </p>
      </Card>

        {/* <Card 
          title="Net Balance" 
          value={`$${summary.netBalance.toFixed(2)}`} 
        /> */}
      </div>


      Recent Transactions

       <div className="bg-white p-6 mt-6 rounded shadow-sm border border-gray-200">
         <h2 className="text-lg font-semibold mb-3">Recent Transactions</h2>
         <ul className="space-y-2">
           {summary?.recentTransactions?.map(tx => (
            <li key={tx.id} className="flex justify-between  pb-2">
              <div>
                <p className="text-sm text-gray-700"> {tx.date} {tx.description}</p>
              </div>
              <p className={tx.type === 'income' ? 'text-green-600' : 'text-red-600'}>
                {tx.type === 'income' ? '+' : '-'}${tx.amount.toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


// import useSummary from "@/hooks/useSummary";
// import { Skeleton } from "@/components/ui/skeleton";

// const Dashboard = () => {
//   const {summary, isLoading, error}= useSummary();

//   if (isLoading) {
//     return (
//       <div className="space-y-6 p-4">
//         <Skeleton className="h-10 w-[200px]" />
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <Skeleton className="h-32" />
//           <Skeleton className="h-32" />
//           <Skeleton className="h-32" />
//         </div>
//       </div>
//     )
//   }
//   if (error) {
//     return( 
//         <div className="p-4 text-red-500 bg-red-50 rounded-b-lg">
//           Error: Failed to load Dashboard. Please Refresh.
//         </div>
//     )}

//    return (
//       <div className="space-y-4">
//         {/* <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1> */}
//         <p className="text-gray-600">
//           Welcome to your personal finance dashboard.  of your financial health.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

//           <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//           <h3 className="font-medium text-gray-900">Total Balance</h3>
//           <p className="text-2xl font-semibold text-gray-900 mt-2">
//             ${summary?.netBalance?.toFixed(2) || "0.00"}
//           </p>
//         </div>

//           <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
//             <h3 className="font-medium text-gray-900">Monthly Income</h3>
//             <p className="text-2xl font-semibold text-blue-900 mt-2">
//               +${summary?.totalIncome?.toFixed(2) || "0.00"}</p>
//           </div>

        //   <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        //     <h3 className="font-medium text-gray-900">Monthly Expenses</h3>
        //     <p className="text-2xl font-semibold text-red-600 mt-2">
        //       -${summary?.totalExpenses?.toFixed(2) || "0.00"}</p>
        //   </div>
        // </div>

//         {/* Recent Transactions */}
//       <div className="bg-white p-6 mt-6 rounded shadow-sm border border-gray-200">
//         <h2 className="text-lg font-semibold mb-3">Recent Transactions</h2>
//         <ul className="space-y-2">
//           {summary?.recentTransactions?.map(tx => (
//             <li key={tx.id} className="flex justify-between  pb-2">
//               <div>
//                 <p className="text-sm text-gray-700"> {tx.date} {tx.description}</p>
//               </div>
//               <p className={tx.type === 'income' ? 'text-green-600' : 'text-red-600'}>
//                 {tx.type === 'income' ? '+' : '-'}${tx.amount.toFixed(2)}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>

//       </div>
//     )
//   }

//   export default Dashboard;
