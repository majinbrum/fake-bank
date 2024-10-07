import { ITransactionProps } from "@/app/(models)/transactionInterface";

const TableRow = (props: ITransactionProps) => {
	const { transaction } = props;

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
		<tr>
			<td>{transaction.transactionDate}</td>
			<td className='font-bold'>{transaction.description}</td>
			<td className='inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider bg-violet-200 uppercase rounded-full '>{transaction.category}</td>
			<td>{transaction.type}</td>
			<td className='font-bold'> {transaction.type !== "income" ? <span>-${transaction.amount}</span> : <span className='text-emerald-400'>+${transaction.amount}</span>}</td>
			<td className='flex justify-center items-center'>{transaction.type !== "credit" ? completedIcon : pendingIcon}</td>
		</tr>
	);
};

export default TableRow;
