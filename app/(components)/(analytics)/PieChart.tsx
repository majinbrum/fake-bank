import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { ApexOptions } from "apexcharts";

import { useTransactionsContext } from "@/app/providers/TransactionsContext";

interface ExpensesByCategory {
	[key: string]: number; // This allows any string as a key with a number value
}

export default function PieChart() {
	const { expensesArray } = useTransactionsContext();

	// Function to group expenses by category and sum amounts
	const expensesAmountsByCategory = expensesArray.reduce<ExpensesByCategory>((acc, expense) => {
		// Check if the category already exists in the accumulator
		if (!acc[expense.category]) {
			// If not, initialize it with 0
			acc[expense.category] = 0;
		}

		// Add the current expense amount to the total for that category
		acc[expense.category] += expense.amount;

		return acc; // Return the updated accumulator for the next iteration
	}, {});

	const series = Object.values(expensesAmountsByCategory);

	const options: ApexOptions = {
		labels: Object.keys(expensesAmountsByCategory),
		chart: {
			toolbar: {
				show: false,
			},
		},
		title: {
			text: "Expenses Categories",
			align: "left",
			style: {
				fontSize: "21px",
				fontFamily: "inherit",
				fontWeight: 800,
			},
		},
		dataLabels: {
			enabled: false,
		},
		colors: ["#34D399", "#A78BFA", "#10385B", "#F3F4F6", "#FF4560", "#020617", "#DDD6FE", "#007EA7", "#F9C784", "#6D326D"],
		legend: {
			show: true,
			position: "bottom",
			horizontalAlign: "center",
			fontSize: "12px",
			fontFamily: "inherit",
			fontWeight: 400,
		},
		fill: {
			opacity: 0.8,
		},
		tooltip: {
			fillSeriesColor: false,
			theme: "dark",
		},
	};

	return (
		<>
			<div className='col-span-1 row-span-1 bg-white p-6 rounded-xl shadow-sm'>
				<ApexChart type='pie' options={options} series={series} height={"100%"} />
			</div>
		</>
	);
}
