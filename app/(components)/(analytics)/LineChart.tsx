import { useTransactionsContext } from "@/app/providers/TransactionsContext";

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { ApexOptions } from "apexcharts";

export default function LineChart() {
	const { expensesArray } = useTransactionsContext();

	const series = [
		{
			name: "Expenses",
			data: expensesArray.map((expense) => expense.amount),
		},
	];

	const options: ApexOptions = {
		chart: {
			toolbar: {
				show: true,
			},
		},
		title: {
			text: "Expenses Overview",
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
		colors: ["#FF4560"],
		stroke: {
			lineCap: "round",
			curve: "smooth",
		},
		markers: {
			size: 3,
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
			categories: expensesArray.map((expense) => expense.transactionDate),
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
		fill: {
			opacity: 0.8,
		},
		tooltip: {
			theme: "dark",
		},
	};

	return (
		<>
			<div className='col-span-1 row-span-1 bg-white p-6 rounded-xl shadow-sm'>
				<ApexChart type='line' options={options} series={series} height={"100%"} />
			</div>
		</>
	);
}
