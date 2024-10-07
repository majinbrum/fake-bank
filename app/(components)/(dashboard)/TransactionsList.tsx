"use client";

import Transaction from "./Transaction";
import { ITransaction } from "@/app/(models)/transactionInterface";
import { useTransactionsContext } from "@/app/providers/TransactionsContext";

const TransactionsList = () => {
	const { transactions } = useTransactionsContext();

	return (
		<ul role='list' className='divide-y divide-gray-100 '>
			{transactions.slice(0, 10).map((transaction: ITransaction) => (
				<Transaction key={transaction._id} transaction={transaction} />
			))}
		</ul>
	);
};

export default TransactionsList;
