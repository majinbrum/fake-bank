import { NextResponse } from "next/server";
import Transaction from "../../(models)/FakeBankDB/Transaction";

export async function GET() {
	try {
		const transactions = await Transaction.find().sort({ transactionDate: -1 });
		return NextResponse.json({ transactions }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}

export async function POST(req: any) {
	try {
		const body = await req.json();
		const transactionData = body;
		await Transaction.create(transactionData);

		return NextResponse.json({ message: "La transazione è stata creata" }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
