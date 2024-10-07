import { NextResponse } from "next/server";
import Transaction from "../../../(models)/FakeBankDB/Transaction";

// interface GETParams {
// 	params: {
// 		type?: string;
// 		category?: string;
// 	};
// }

// export async function GET({ params }: GETParams) {
// 	const { type = "", category = "" } = params;

// 	try {
// 		const transactions = await Transaction.find({ type: type, category: category }).sort({ transactionDate: -1 });
// 		return NextResponse.json({ transactions }, { status: 200 });
// 	} catch (error) {
// 		return NextResponse.json({ message: "Error", error }, { status: 500 });
// 	}
// }

interface IByTypeProps {
	params: { type: string };
}

export async function GET(req: any, { params }: IByTypeProps) {
	try {
		const { type } = params;
		const transactions = await Transaction.find({ type: type }).sort({ transactionDate: -1 });
		return NextResponse.json({ transactions }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: "Error", error }, { status: 500 });
	}
}
