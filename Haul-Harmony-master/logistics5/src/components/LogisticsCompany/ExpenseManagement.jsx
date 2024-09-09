import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { IndianRupee } from 'lucide-react';

const ExpenseManagement = () => {
  const lastMonthIncome = { income: '220000', totalExpense: '120000', netIncome: '100000' };
  const expenses = { fuel: '50000', driverExpense: '40000', services: '30000' };
  const pieData = [
    { name: 'Fuel', value: 50000 },
    { name: 'Driver Expense', value: 40000 },
    { name: 'Services', value: 30000 },
  ];
  const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Last Month Summary</h2>
        <div className="space-y-4">
          {Object.entries(lastMonthIncome).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center">
              <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-xl font-semibold flex items-center">
                <IndianRupee size={18} className="mr-1" />
                {formatCurrency(value)}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Expenses Breakdown</h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`Cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 space-y-4">
          {Object.entries(expenses).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center">
              <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="text-xl font-semibold flex items-center">
                <IndianRupee size={18} className="mr-1" />
                {formatCurrency(value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpenseManagement;
