
export const computeSummary = (transactions) => {
    
    let totalIncome = 0;
    let totalExpenses = 0;
    
    
    transactions.forEach(transaction => {
      if (transaction.type === 'income') {
        totalIncome += transaction.amount;
      } else if (transaction.type === 'expense') {
        totalExpenses += transaction.amount;
      }
    });
    const netBalance = totalIncome - totalExpenses;
    
    // Get recent transactions (last 3)
    const recentTransactions = [...transactions]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);
  
    return {
      totalIncome: parseFloat(totalIncome.toFixed(2)),
      totalExpenses: parseFloat(totalExpenses.toFixed(2)),
      netBalance: parseFloat(netBalance.toFixed(2)),
    //   savingsGoalProgress: 0.65, 
      recentTransactions
    };
  };
  
  