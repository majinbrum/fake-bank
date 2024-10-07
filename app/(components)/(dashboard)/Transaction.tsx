import { ITransactionProps } from "@/app/(models)/transactionInterface";

// const Transaction: React.FC<ITransactionProps> = ({ transaction }) => {
const Transaction = (props: ITransactionProps) => {
	const { transaction, isSavingsPage } = props;

	const transactionLabels: { [key: string]: string } = {
		debit: "Debit",
		credit: "Credit",
		income: "Income",
	};

	const completedIcon = (
		<svg className='h-5 w-5 text-emerald-400' width='24' height='24' viewBox='0 0 24 24' strokeWidth='1' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
			<path stroke='none' d='M0 0h24v24H0z' /> <path d='M7 12l5 5l10 -10' /> <path d='M2 12l5 5m5 -5l5 -5' />
		</svg>
	);

	const pendingIcon = (
		<svg className='h-5 w-5 text-gray-400' width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'>
			<path stroke='none' d='M0 0h24v24H0z' /> <circle cx='12' cy='12' r='9' /> <polyline points='12 7 12 12 15 15' />
		</svg>
	);

	return (
		<li className='flex justify-between gap-x-6 py-5'>
			<div className='flex min-w-0 gap-x-4'>
				<div className='min-w-0 flex-auto'>
					<p className='inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider bg-violet-200 uppercase rounded-full '>{transaction.category}</p>
					<p className='text-md font-semibold leading-6 text-gray-900'>{transaction.description}</p>
					<p className='mt-1 truncate text-xs leading-5 text-gray-500'>{transactionLabels[transaction.type]}</p>
				</div>
			</div>
			<div className='flex flex-col items-end justify-between'>
				<p className='mt-1 truncate text-xs leading-5 text-gray-500'>{transaction.transactionDate}</p>
				<p className='text-md font-semibold leading-6 text-gray-900'>
					{(isSavingsPage && transaction.type === "debit") || (transaction.type === "income" && !isSavingsPage) ? (
						<span className='text-emerald-400'>+${transaction.amount}</span>
					) : (
						<span>-${transaction.amount}</span>
					)}
				</p>
				{transaction.type !== "credit" ? completedIcon : pendingIcon}
			</div>
		</li>
	);
};

export default Transaction;
