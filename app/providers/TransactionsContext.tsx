"use client";

import { createContext, useState, useEffect, useContext } from "react";
import { ITransaction } from "../(models)/transactionInterface";
import { getTransactions } from "@/action/get-transactions";

import React from "react";

interface TransactionsProviderType {
	transactions: ITransaction[];
	expensesArray: ITransaction[];
	incomeArray: ITransaction[];
	savingsArray: ITransaction[];
	balanceAmount: number;
	savingsAmount: number;
	refetchTransactions: () => Promise<void>;
}

const TransactionsContext = createContext<TransactionsProviderType | undefined>(undefined);

interface ITransactionProviderProps {
	children: React.ReactNode;
}

export const TransactionsProvider = ({ children }: ITransactionProviderProps) => {
	const [transactions, setTransactions] = useState<ITransaction[]>([]);
	const [expensesArray, setExpensesArray] = useState<ITransaction[]>([]);
	const [incomeArray, setIncomeArray] = useState<ITransaction[]>([]);
	const [savingsArray, setSavingsArray] = useState<ITransaction[]>([]);
	const [balanceAmount, setBalanceAmount] = useState(0);
	const [savingsAmount, setSavingsAmount] = useState(0);

	const calcBalanceAmount = () => {
		const expensesArray = transactions.filter((transaction) => transaction.type == "debit");
		setExpensesArray(expensesArray.filter((expense) => expense.category !== "Payment/Credit" && expense.category !== "Savings"));
		const expensesAmount = expensesArray.reduce((sum, transaction) => sum + transaction.amount, 0);

		const incomeTotalArray = transactions.filter((transaction) => transaction.type == "income");
		setIncomeArray(incomeTotalArray);
		const incomeAmount = incomeTotalArray.reduce((sum, transaction) => sum + transaction.amount, 0);

		return incomeAmount - expensesAmount;
	};

	const calcSavingsAmount = () => {
		const savingsDebitArray = transactions.filter((transaction) => transaction.category == "Savings" && transaction.type === "debit");
		setSavingsArray(savingsDebitArray);
		const savingsDebitAmount = savingsDebitArray.reduce((sum, transaction) => sum + transaction.amount, 0);

		const savingsIncomeArray = transactions.filter((transaction) => transaction.category == "Savings" && transaction.type === "income");
		const savingsIncomeAmount = savingsIncomeArray.reduce((sum, transaction) => sum + transaction.amount, 0);

		return savingsDebitAmount - savingsIncomeAmount;
	};

	useEffect(() => {
		setBalanceAmount(calcBalanceAmount());
		setSavingsAmount(calcSavingsAmount());
	}, [transactions]);

	const fetchTransactions = async () => {
		const response = await getTransactions();
		setTransactions(response);
	};

	const refetchTransactions = async () => {
		await fetchTransactions();
	};

	useEffect(() => {
		fetchTransactions();
	}, []);

	return <TransactionsContext.Provider value={{ transactions, expensesArray, incomeArray, savingsArray, balanceAmount, savingsAmount, refetchTransactions }}>{children}</TransactionsContext.Provider>;
};

export const useTransactionsContext = () => {
	const context = useContext(TransactionsContext);
	if (context === undefined) {
		throw new Error("useTransactionsContext must be used within a TransactionsProvider");
	}
	return context;
};
