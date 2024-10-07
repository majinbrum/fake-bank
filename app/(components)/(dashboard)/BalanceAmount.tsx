"use client";

import { useTransactionsContext } from "@/app/providers/TransactionsContext";

const BalanceAmount = () => {
	const { balanceAmount } = useTransactionsContext();

	return <span className='font-semibold text-5xl '>${balanceAmount.toFixed(2)}</span>;
};

export default BalanceAmount;
