import React from "react";
import { 
    PieChart, Pie, Cell, Tooltip, Legend, 
    LineChart, Line, XAxis, YAxis, CartesianGrid, 
    BarChart, Bar 
} from "recharts";
import * as C from "./styles";

const Charts = ({ transactionsList }) => {
    const expenseTransactions = transactionsList.filter(transaction => transaction.expense);

    const categories = expenseTransactions.reduce((acc, transaction) => {
        const category = transaction.desc;
        acc[category] = (acc[category] || 0) + Number(transaction.amount);
        return acc;
    }, {});

    let accumulatedBalance = 0;
    const byDate = transactionsList
        .sort((a, b) => new Date(a.date) - new Date(b.date)) 
        .map((transaction) => {
            accumulatedBalance += transaction.expense ? -Number(transaction.amount) : Number(transaction.amount);
            return { date: transaction.date, saldo: accumulatedBalance };
        });

    const pieData = Object.entries(categories).map(([key, value]) => ({ name: key, value }));
    const barData = Object.entries(categories).map(([key, value]) => ({ category: key, amount: value }));
    const lineData = byDate;

    const COLORS = ["#1A5755", "#3E8987", "#46D1CD", "#65889D", "#D9D9D9"];

    return (
        <C.Container>
            <C.ChartBox style={{ display: "flex", alignItems: "center" }}>
                <h3>Maiores despesas em porcentagem</h3>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <PieChart width={400} height={200}>
                        <Pie 
                            data={pieData} 
                            dataKey="value" 
                            nameKey="name" 
                            cx="50%" 
                            cy="50%" 
                            outerRadius={80} 
                            innerRadius={40} 
                            fill="#8884d8"
                        >
                            {pieData.map((_, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend layout="vertical" align="right" verticalAlign="middle" />
                    </PieChart>
                </div>
            </C.ChartBox>


            <C.ChartBox>
                <h3>Evolução do saldo</h3>
                <LineChart width={380} height={220} data={lineData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="saldo" stroke="#46D1CD" strokeWidth={3} dot={{ r: 5 }} />
                    <Tooltip />
                </LineChart>
            </C.ChartBox>

            
            <C.ChartBox fullWidth>
                <h3>Despesas por categoria</h3>
                <BarChart width={700} height={250} data={barData}>
                    <XAxis dataKey="category" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="amount" fill="#3E8987" barSize={40} />
                    <Tooltip />
                </BarChart>
            </C.ChartBox>
        </C.Container>
    );
};

export default Charts;
