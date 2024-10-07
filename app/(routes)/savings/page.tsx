import SavingsOverview from "@/app/(components)/(savings)/SavingsOverview";
import SavingsOp from "@/app/(components)/(savings)/SavingOp";
import SavingsTransactions from "@/app/(components)/(savings)/SavingsTransactions";

const withdrawIcon = (
	<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-4'>
		<path strokeLinecap='round' strokeLinejoin='round' d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5' />
	</svg>
);
const rechargeIcon = (
	<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-4'>
		<path strokeLinecap='round' strokeLinejoin='round' d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3' />
	</svg>
);

export default async function Savings() {
	return (
		<div className='grid grid-cols-2 auto-rows-auto gap-8 w-3/4 min-w-fit lg:w-full'>
			<SavingsOverview />
			<SavingsOp operation='Withdraw' icon={withdrawIcon} />
			<SavingsOp operation='Recharge' icon={rechargeIcon} />
			<SavingsTransactions />
		</div>
	);
}
