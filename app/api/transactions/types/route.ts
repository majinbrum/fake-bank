import { NextResponse } from "next/server";
import Type from "../../../(models)/FakeBankDB/Type";

export async function GET() {
	try {
		const types = await Type.find();
		return NextResponse.json({ types }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}

export async function POST(req: any) {
	try {
		const body = await req.json();
		const typeData = body;
		await Type.create(typeData);

		return NextResponse.json({ message: "Il type è stata creata" }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
