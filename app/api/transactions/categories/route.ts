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
