import { ITransaction } from "@/app/(models)/transactionInterface";

// specifichiamo il type del return
// export const getTransactions = async (): Promise<ITransaction[]> => {
// 	try {
// 		const res = await fetch("https://api.sampleapis.com/fakebank/accounts");
// 		const data = await res.json();
// 		return data;
// 	} catch (error: any) {
// 		throw Error(error.message);
// 	}
// };

export const getTransactions = async (): Promise<ITransaction[]> => {
	try {
		const res = await fetch("http://localhost:3000/api/transactions");
		const data = await res.json();
		return data.transactions;
	} catch (error: any) {
		throw Error(error.message);
	}
};

// fetch("http://localhost:3000/api/transactions")
// 	.then((res) => res.json())
// 	.then((res) => {
// 		console.log(res);
// 	});

// DA CANCELLARE:
export const getTransactionsByType = async (type: string): Promise<ITransaction[]> => {
	try {
		const res = await fetch(`http://localhost:3000/api/transactions/${type}`);
		const data = await res.json();
		return data.transactions;
	} catch (error: any) {
		throw Error(error.message);
	}
};
