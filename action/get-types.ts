import { IType } from "@/app/(models)/typeInterface";

export const getTypes = async (): Promise<IType[]> => {
	try {
		const res = await fetch("https://fake-bank-one.vercel.app/api/transactions/types");
		const data = await res.json();
		return data.types;
	} catch (error: any) {
		throw Error(error.message);
	}
};
