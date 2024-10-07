import { NextResponse } from "next/server";
import Category from "../../../(models)/FakeBankDB/Category";

export async function GET() {
	try {
		const categories = await Category.find();
		return NextResponse.json({ categories }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}

export async function POST(req: any) {
	try {
		const body = await req.json();
		const categoryData = body;
		await Category.create(categoryData);

		return NextResponse.json({ message: "La categoria è stata creata" }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}

// const data = [
// 	{ category: "Rent" },
// 	{ category: "Food" },
// 	{ category: "Transportation" },
// 	{ category: "Utilities" },
// 	{ category: "Entertainment" },
// 	{ category: "Merchandise" },
// 	{ category: "Other Services" },
// 	{ category: "Dining" },
// 	{ category: "Health Care" },
// 	{ category: "Other Travel" },
// 	{ category: "Payment/Credit" },
// 	{ category: "Gas/Automotive" },
// ];

// data.forEach((category) => {
// 	fetch("http://localhost:3000/api/transactions/categories", {
// 		// definiaimo, attraverso la fetch, l'end-point da utilizzare per comunicare con il DB
// 		method: "POST", // definiamo il tipo di chiamata
// 		body: JSON.stringify(category),
// 		headers: { "Content-Type": "application/json" },
// 	});
// });
