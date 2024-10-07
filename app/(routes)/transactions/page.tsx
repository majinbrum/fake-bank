"use client";
import { useTransactionsContext } from "@/app/providers/TransactionsContext";
import Table from "@/app/(components)/(transactions)/Table";
import TableContainer from "@/app/(components)/(transactions)/TableContainer";
import NotFound from "../not-found";
import { useState } from "react";

const TransactionsTable = async () => {
	const { transactions } = useTransactionsContext();
	const [filterType, setFilterType] = useState("All");

	if (transactions.length < 1) return <NotFound />;
	return (
		<>
			<TableContainer filterType={filterType} setFilterType={setFilterType}>
				<Table transactions={filterType !== "All" ? transactions.filter((transaction) => transaction.type === filterType) : transactions} />
			</TableContainer>
		</>
	);
};

export default TransactionsTable;
