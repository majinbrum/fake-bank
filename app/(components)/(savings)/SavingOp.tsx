"use client";

import { useEffect, useState } from "react";
import Toast from "typescript-toastify";

import Button from "./Button";

import { postTransaction } from "@/action/post-transaction";
import { ITransactionToPost } from "@/app/(models)/transactionInterface";

import { useTransactionsContext } from "@/app/providers/TransactionsContext";

interface ISavingsOpProps {
	operation: string;
	icon: JSX.Element;
}

const dollarIcon = (
	<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='size-6'>
		<path
			strokeLinecap='round'
			strokeLinejoin='round'
			d='M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
		/>
	</svg>
);

const SavingsOp = (props: ISavingsOpProps) => {
	const { operation, icon } = props;
	const { balanceAmount, savingsAmount, refetchTransactions } = useTransactionsContext();

	const [amount, setAmount] = useState<number>(0);
	const [transaction, setTransaction] = useState<ITransactionToPost | null>(null);

	function showToast(success: boolean) {
		return new Toast({
			position: "top-right",
			toastMsg: `${success ? "✅" : "⛔"} ${operation} of ${amount} ${success ? "confirmed!" : "failed."}`,
			autoCloseTime: 2000,
			canClose: true,
			showProgress: true,
			pauseOnHover: true,
			pauseOnFocusLoss: true,
			type: "default",
			theme: "light",
		});
	}

	function handleConfirm() {
		const currentDate = new Date();
		currentDate.setFullYear(currentDate.getFullYear() + 1000);
		const date = currentDate.toLocaleDateString("en-CA").toString();

		setTransaction({
			transactionDate: date,
			description: `Savings ${operation}`,
			category: "Savings",
			amount: amount,
			type: operation == "Withdraw" ? "income" : "debit",
		});
	}

	async function postTransactionAndRefetch() {
		if (transaction) {
			if ((operation === "Withdraw" && amount < savingsAmount) || (operation === "Recharge" && amount < balanceAmount)) {
				await postTransaction(transaction);
				showToast(true);
				setAmount(0);
				await refetchTransactions();
			} else {
				showToast(false);
				setAmount(0);
			}
		}
	}

	useEffect(() => {
		postTransactionAndRefetch();
	}, [transaction]);

	return (
		<div className='h-auto bg-white p-6 rounded-xl shadow-sm'>
			<h2 className='font-bold text-lg mb-3 flex items-center gap-x-2'>
				{operation}
				<span className='inline-block p-1  bg-violet-200 rounded-full'>{icon}</span>
			</h2>
			<label className='p-2 bg-white rounded-xl input input-bordered flex items-center gap-2 border-gray-100 border-2 '>
				<input type='number' className='grow p-2' placeholder='Amount' value={amount === 0 ? "" : amount} onChange={(e) => setAmount(Number(e.target.value))} />
				{dollarIcon}
			</label>
			<div className='flex justify-end mt-3'>
				<Button onClick={handleConfirm} disabled={amount === 0} />
			</div>
		</div>
	);
};

export default SavingsOp;
