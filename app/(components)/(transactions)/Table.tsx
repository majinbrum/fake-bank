import { ITransactionListProps } from "@/app/(models)/transactionInterface";
import TableRow from "./TableRow";
// import { traceGlobals } from "next/dist/trace/shared";

const tableTh = [
	{ id: 1, label: "Transaction date" },
	{ id: 2, label: "Description" },
	{ id: 3, label: "Category" },
	{ id: 4, label: "Type" },
	{ id: 5, label: "Amount" },
	// {id:6,label:"Status"}
];

function Table(props: ITransactionListProps) {
	const { transactions } = props;

	return (
		<table className='table border-separate border-spacing-8 w-full'>
			{/* head */}
			<thead>
				<tr className='text-left'>
					{tableTh.map((th) => {
						return (
							<th key={th.id} className='font-semibold uppercase'>
								{th.label}
							</th>
						);
					})}
					<th className='font-semibold uppercase text-center'>Status</th>
				</tr>
			</thead>
			<tbody>
				{/* row 1 */}
				{transactions.map((transaction) => (
					<TableRow key={transaction._id} transaction={transaction} />
				))}
			</tbody>
			{/* foot */}
			<tfoot>
				<tr className='text-left'>
					{tableTh.map((th) => {
						return (
							<th key={th.id} className='font-semibold uppercase'>
								{th.label}
							</th>
						);
					})}
					<th className='font-semibold uppercase text-center'>Status</th>
				</tr>
			</tfoot>
		</table>
	);
}

export default Table;
