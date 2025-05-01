
import { mockTransactions } from './mockTransactions';
import { computeSummary } from '../utils/computeSummary';

export const mockSummary = computeSummary(mockTransactions);





// export const mockSummary = {
//     totalIncome: 3750.00,  
//     totalExpenses: 517.82, 
//     netBalance: 3232.18,   
//     savingsGoalProgress: 0.65, 

//     recentTransactions: [   
//       {
//         id: '8',
//         date: '2025-03-12',
//         description: 'Bonus Payment',
//         category: 'Income',
//         amount: 500.00,
//         type: 'income'
//       },
//       {
//         id: '10',
//         date: '2025-03-20',
//         description: 'Online Course',
//         category: 'Income',
//         amount: 99.99,
//         type: 'expense'
//       },
//       {
//         id: '7',
//         date: '2025-03-12',
//         description: 'Bonus Payment',
//         category: 'Income',
//         amount: 500.00,
//         type: 'income'
//       }
//     ]
//   };
  
  