import { IType } from "@/app/(models)/typeInterface";

export const getTypes = async (): Promise<IType[]> => {
	try {
		const res = await fetch("http://localhost:3000/api/transactions/types");
		const data = await res.json();
		return data.types;
	} catch (error: any) {
		throw Error(error.message);
	}
};
