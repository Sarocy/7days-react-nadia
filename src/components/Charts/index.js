import React, { useState, useEffect } from "react";
import { 
    PieChart, Pie, Cell, Tooltip, Legend, 
    LineChart, Line, XAxis, YAxis, CartesianGrid, 
    BarChart, Bar 
} from "recharts";
import * as C from "./styles";

const Charts = ({ transactionsList }) => {
    const [chartSize, setChartSize] = useState({
        width: window.innerWidth < 768 ? window.innerWidth * 0.5 : window.innerWidth * 0.6, 
        height: window.innerHeight * 0.4, 
        outerRadius: window.innerWidth < 768 ? window.innerWidth * 0.9 : window.innerWidth * 0.3,
        innerRadius: window.innerWidth * 0.05, 
        barSize: window.innerWidth * 0.03, 
    });

    useEffect(() => {
        const handleResize = () => {
            setChartSize({
                width: window.innerWidth < 768 ? window.innerWidth * 0.7 : window.innerWidth * 0.6,
                height: window.innerHeight * 0.4,
                outerRadius: window.innerWidth < 768 ? window.innerWidth * 0.12 : window.innerWidth * 0.065,
                innerRadius: window.innerWidth < 768 ? window.innerWidth * 0.05 : window.innerWidth * 0.03,
                barSize: window.innerWidth * 0.03,
            });
        };

        window.addEventListener("resize", handleResize);
        handleResize(); 
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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
            <C.ChartBox>
                <h3>Maiores despesas em porcentagem</h3>
                <PieChart width={chartSize.width} height={chartSize.height}>
                    <Pie 
                        data={pieData} 
                        dataKey="value" 
                        nameKey="name" 
                        cx="50%" 
                        cy="50%" 
                        outerRadius={chartSize.outerRadius} 
                        innerRadius={chartSize.innerRadius} 
                        fill="#8884d8"
                    >
                        {pieData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend layout="horizontal" 
                            align="center" 
                            verticalAlign="bottom" 
                            iconSize={chartSize.width/ 60}  
                            wrapperStyle={{
                                fontSize: `${chartSize.width < 768 ? chartSize.width / 20 : chartSize.width / 50}`, 
                                marginTop: "10px"
                        }}/>
                </PieChart>
            </C.ChartBox>

            <C.ChartBox>
                <h3>Evolução do saldo</h3>
                <LineChart
                    width={chartSize.width < 362 ? chartSize.width : chartSize.width / 2}
                    height={chartSize.height}
                    data={lineData}
                    style={{ margin: "auto" }}
                >
                    <XAxis 
                        dataKey="date" 
                        tick={{ fontSize: "2vh" }}
                    />
                    <YAxis 
                        tick={{ fontSize: "2vh" }} 
                    />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line 
                        type="monotone" 
                        dataKey="saldo" 
                        stroke="#46D1CD" 
                        strokeWidth={chartSize.width / 300} 
                        dot={{ r: chartSize.width / 150 }} 
                    />
                    <Tooltip />
                </LineChart>
            </C.ChartBox>

            <C.ChartBox fullWidth>
                <h3>Despesas por categoria</h3>
                <BarChart width={chartSize.width} height={chartSize.height} data={barData}>
                    <XAxis dataKey="category" 
                            tick={{ fontSize: `${chartSize.width < 568 ? 12 : 16}` }}/>
                    <YAxis tick={{ fontSize: "2vh" }}/>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="amount" fill="#3E8987" barSize={chartSize.barSize} />
                    <Tooltip />
                </BarChart>
            </C.ChartBox>
        </C.Container>
    );
};

export default Charts;
