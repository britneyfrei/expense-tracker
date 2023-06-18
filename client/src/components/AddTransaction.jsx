import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { History } from "./History";
import { categories } from "../utils/utils";

export const AddTransaction = () => {
	const categoryNames = Object.keys(categories);
	const [text, setText] = useState("");
	const [category, setCategory] = useState(categoryNames[0]);
	const [amount, setAmount] = useState("");
	const { addTransaction } = useContext(GlobalContext);

	const onSubmit = (e) => {
		e.preventDefault();
		const newTransaction = {
			text,
			category,
			amount: parseFloat(amount),
		};
		addTransaction(newTransaction);
		setText("");
		setAmount("");
	};

	return (
		<div className="max-w-sm mx-auto w-96">
			<h1 className="font-bold pb-4 text-xl">Add New Transaction</h1>
			<form onSubmit={onSubmit}>
				<div className="grid gap-4">
					<input
						type="text"
						value={text}
						onChange={(e) => setText(e.target.value)}
						placeholder="Title of transaction"
						className="form-input"
					/>
					<select
						className="form-input"
						defaultValue={categoryNames[0]}
						onChange={(e) => setCategory(e.target.value)}
					>
						{categoryNames.map((category) => (
							<option key={category} value={category}>
								{category}
							</option>
						))}
					</select>
					<input
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder="Amount"
						className="form-input"
					/>
					<button className="border py-2 text-white bg-indigo-500 w-full">
						Add Transaction
					</button>
				</div>
			</form>

			<History />
		</div>
	);
};
