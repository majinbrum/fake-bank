"use client";
import { useTransactionsContext } from "@/app/providers/TransactionsContext";
import Transaction from "../(dashboard)/Transaction";

const SavingsList = () => {
	const { transactions } = useTransactionsContext();

	return (
		<ul role='list' className='divide-y divide-gray-100 '>
			{transactions
				.filter((transaction) => transaction.category === "Savings")
				.map((transaction) => (
					<Transaction key={transaction._id} transaction={transaction} isSavingsPage={true} />
				))}
		</ul>
	);
};

export default SavingsList;
