"use client";

import BarChart from "@/app/(components)/(analytics)/BarChart";
import LineChart from "@/app/(components)/(analytics)/LineChart";
import PieChart from "@/app/(components)/(analytics)/PieChart";

export default function Dashboard() {
	return (
		<>
			<div className='grid grid-cols-2 grid-rows-2 gap-8 w-3/4 min-w-fit lg:w-full'>
				<LineChart />
				<BarChart />
				<PieChart />
			</div>
		</>
	);
}
