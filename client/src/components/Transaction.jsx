import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import "boxicons";
import { categories } from "../utils/utils";

export const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	return (
		<div
			className="item flex items-center bg-gray-50 py-2 pr-2 rounded-r"
			style={{
				borderRight: `8px solid ${categories[transaction.category]}`,
			}}
		>
			<button
				onClick={() => deleteTransaction(transaction._id)}
				className="px-3 w-1/3 text-left flex"
			>
				<box-icon
					name="trash"
					size="16px"
					color={categories[transaction.category]}
				/>
			</button>
			<span className="w-1/3 text-center">{transaction.text}</span>
			<span className="w-1/3 text-right">
				${transaction.amount.toLocaleString()}
			</span>
		</div>
	);
};
