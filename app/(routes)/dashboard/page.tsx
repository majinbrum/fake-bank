import Balance from "../../(components)/(dashboard)/Balance";
import RecentTransactions from "../../(components)/(dashboard)/RecentTransactions";

export default async function Dashboard() {
	return (
		<>
			<div className='grid grid-cols-1 auto-rows-auto gap-y-8 w-3/4 min-w-fit lg:w-full'>
				<Balance />
				<RecentTransactions />
			</div>
		</>
	);
}
