export default function Dashboard() {
    return (
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">
          Welcome to your personal finance dashboard. Here you'll find an overview of your financial health.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-medium text-gray-900">Total Balance</h3>
            <p className="text-2xl font-semibold text-gray-900 mt-2">$12,345.67</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-medium text-gray-900">Monthly Income</h3>
            <p className="text-2xl font-semibold text-blue-900 mt-2">$4,500.00</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-medium text-gray-900">Monthly Expenses</h3>
            <p className="text-2xl font-semibold text-red-600 mt-2">$3,200.00</p>
          </div>
        </div>
      </div>
    )
  }
