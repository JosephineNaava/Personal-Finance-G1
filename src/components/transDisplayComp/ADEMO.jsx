import { Card } from "@/components/reuse/Card";
import { TransactionList } from "@/components/transDisplayComp/transactionList";
import { mockTransactions } from "@/data/mockTransactions";
import useSummary from "@/hooks/useSummary";
import { error } from "console";
 const { summary, isLoading, error} = useSummary()
    if (isLoading) return 

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Total Income" value="$3,750.00" />
        <Card title="Total Expenses" value="-$517.82" />
        <Card title="Net Balance" value="$3,232.18" />
      </div>

      {/* Recent Transactions */}
      <h2 className="text-xl font-semibold">Recent Transactions</h2>
      <TransactionList transactions={mockTransactions.slice(0, 3)} />
    </div>
  );
}

