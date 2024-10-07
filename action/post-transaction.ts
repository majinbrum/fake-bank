import { ITransactionToPost } from "@/app/(models)/transactionInterface";

export const postTransaction = async (transaction: ITransactionToPost) => {
	try {
		const res = await fetch("https://fake-bank-one.vercel.app/api/transactions", {
			// definiaimo, attraverso la fetch, l'end-point da utilizzare per comunicare con il DB
			method: "POST", // definiamo il tipo di chiamata
			body: JSON.stringify(transaction),
			headers: { "Content-Type": "application/json" },
		});
		const data = await res.json();
		console.log("Transaction posted successfully", data);
	} catch (error: any) {
		throw Error(error.message);
	}
};
