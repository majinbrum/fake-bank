import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { ApexOptions } from "apexcharts";

import { useTransactionsContext } from "@/app/providers/TransactionsContext";

export default function BarChart() {
	const { incomeArray, savingsArray } = useTransactionsContext();

	// console.log({ incomeArray });
	// console.log({ savingsArray });

	const allDates = Array.from(new Set([...incomeArray.map((income) => income.transactionDate), ...savingsArray.map((savings) => savings.transactionDate)]));

	const sortedDates = allDates.sort((a, b) => (a < b ? -1 : 1));

	// Map data to match the categories
	const incomeData = sortedDates.map((date) => {
		const matches = incomeArray.filter((income) => income.transactionDate === date);
		const totalMatchesAmount = matches.reduce((sum, income) => sum + income.amount, 0);
		return totalMatchesAmount;
	});

	const savingsData = sortedDates.map((date) => {
		const matches = savingsArray.filter((savings) => savings.transactionDate === date);
		const totalMatchesAmount = matches.reduce((sum, savings) => sum + savings.amount, 0);
		return totalMatchesAmount;
	});

	const series = [
		{
			name: "Income",
			data: incomeData,
		},
		{
			name: "Savings",
			data: savingsData,
		},
	];

	const options: ApexOptions = {
		chart: {
			// stacked: true,
			toolbar: {
				show: false,
			},
		},
		title: {
			text: "Income Overview",
			align: "left",
			margin: 0,
			style: {
				fontSize: "21px",
				fontFamily: "inherit",
				fontWeight: 800,
			},
		},
		dataLabels: {
			enabled: false,
		},
		colors: ["#34D399", "#10385B"],
		plotOptions: {
			bar: {
				columnWidth: "40%",
				borderRadius: 2,
				horizontal: false,
			},
		},
		xaxis: {
			axisTicks: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
			labels: {
				style: {
					colors: "#616161",
					fontSize: "12px",
					fontFamily: "inherit",
					fontWeight: 400,
				},
			},
			categories: sortedDates,
		},
		yaxis: {
			labels: {
				style: {
					colors: "#616161",
					fontSize: "12px",
					fontFamily: "inherit",
					fontWeight: 400,
				},
			},
		},
		grid: {
			show: true,
			borderColor: "#dddddd",
			strokeDashArray: 5,
			xaxis: {
				lines: {
					show: true,
				},
			},
			padding: {
				top: 5,
				right: 20,
			},
		},
		legend: {
			show: true,
			position: "top",
			horizontalAlign: "left",
			fontSize: "12px",
			fontFamily: "inherit",
			fontWeight: 400,
			markers: {
				shape: "circle",
			},
			itemMargin: {
				vertical: 20,
			},
		},
		fill: {
			opacity: 0.8,
		},
		tooltip: {
			theme: "dark",
		},
	};

	return (
		<>
			<div className='col-span-1 row-span-2 bg-white p-6 rounded-xl shadow-sm'>
				<ApexChart type='bar' options={options} series={series} height={"100%"} />
			</div>
		</>
	);
}
