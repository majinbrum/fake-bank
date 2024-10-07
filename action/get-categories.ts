import { ICategory } from "@/app/(models)/categoryInterface";

export const getCategories = async (): Promise<ICategory[]> => {
	try {
		const res = await fetch("http://localhost:3000/api/transactions/categories");
		const data = await res.json();
		return data.categories;
	} catch (error: any) {
		throw Error(error.message);
	}
};
