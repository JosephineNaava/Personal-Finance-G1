export default function Transactions() {
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/* this information will be fetched from user profile in data base */}
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-06-15</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Grocery Store</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">-$125.34</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Food</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-06-14</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Paycheck</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">+$2,500.00</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Income</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }