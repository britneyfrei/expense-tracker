import { useContext, useEffect } from "react";
import { GlobalContext } from "./../context/GlobalState";
import { Transaction } from "./Transaction";

export const History = () => {
	const { transactions, getTransactions } = useContext(GlobalContext);
	useEffect(() => {
		getTransactions();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="flex flex-col py-6 gap-3">
			<h1 className="py-4 font-bold text-xl">History</h1>
			{transactions.map((transaction) => (
				<Transaction key={transaction._id} transaction={transaction} />
			))}
		</div>
	);
};
