import Link from "next/link";
import TransactionsList from "./TransactionsList";

const RecentTransactions = () => {
	return (
		<div className='relative overflow-y-scroll bg-white rounded-xl shadow-sm p-6'>
			<h2 className='font-bold text-lg mb-3'>Recent transactions</h2>

			<TransactionsList />

			<Link href='/transactions' className='mt-3 flex justify-end items-center font-semibold transition-colors duration-200  hover:text-violet-400'>
				Go to Transactions
				<svg className='inline-block w-3 ml-2' fill='currentColor' viewBox='0 0 12 12'>
					<path d='M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z' />
				</svg>
			</Link>
		</div>
	);
};

export default RecentTransactions;
