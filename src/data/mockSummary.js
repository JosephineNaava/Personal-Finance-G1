
export const mockSummary = {
    totalIncome: 3750.00,  // Sum of all income transactions
    totalExpenses: 517.82, // Sum of all expenses
    netBalance: 3232.18,   // totalIncome - totalExpenses
    savingsGoalProgress: 0.65, // Percentage (0-1)
    recentTransactions: [   // Last 2-3 transactions
      {
        id: '8',
        date: '2025-03-12',
        description: 'Bonus Payment',
        category: 'Income',
        amount: 500.00,
        type: 'income'
      },
      {
        id: '10',
        date: '2025-03-20',
        description: 'Online Course',
        category: 'Income',
        amount: 99.99,
        type: 'expense'
      },
      {
        id: '7',
        date: '2025-03-12',
        description: 'Bonus Payment',
        category: 'Income',
        amount: 500.00,
        type: 'income'
      }
    ]
  };
  
  