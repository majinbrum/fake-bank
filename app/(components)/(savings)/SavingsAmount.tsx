"use client";
import { useTransactionsContext } from "@/app/providers/TransactionsContext";

const SavingsAmount = () => {
	const { savingsAmount } = useTransactionsContext();

	return <span className='font-semibold text-5xl '>${savingsAmount.toFixed(2)}</span>;
};

export default SavingsAmount;
