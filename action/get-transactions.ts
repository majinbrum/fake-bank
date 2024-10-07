import { ITransaction } from "@/app/(models)/transactionInterface";

export const getTransactions = async (): Promise<ITransaction[]> => {
	try {
		const res = await fetch("https://fake-bank-one.vercel.app/api/transactions");
		const data = await res.json();
		return data.transactions;
	} catch (error: any) {
		throw Error(error.message);
	}
};
