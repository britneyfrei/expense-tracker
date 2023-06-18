import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { Labels } from "./Labels";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { categories, getSum, groupBy } from "../utils/utils";

Chart.register(ArcElement);

export const Graph = () => {
	const { transactions } = useContext(GlobalContext);
	const transactionsByCategory = groupBy(transactions, "category");
	const totals = [];
	Object.keys(transactionsByCategory).forEach((category) => {
		totals.push([
			category,
			getSum(
				transactionsByCategory[category].map(
					(transaction) => transaction.amount
				)
			),
		]);
	});
	const totalValues = totals.map((total) => total[1]);
	const total = getSum(totalValues);
	const colors = totals.map((total) => categories[total[0]]);
	const config = {
		data: {
			datasets: [
				{
					data: totalValues,
					backgroundColor: colors,
					hoverOffset: 4,
					borderRadius: 30,
					spacing: 10,
				},
			],
		},
		options: {
			cutout: 115,
		},
	};

	return (
		<div className="flex justify-content max-w-xs mx-auto">
			<div className="item">
				<div className="chart relative">
					<Doughnut {...config} />
					<h3 className="mb-4 font-bold title">
						Total
						<span className="block text-3xl text-emerald-400">
							${total.toLocaleString()}
						</span>
					</h3>
				</div>
				<div className="flex flex-col py-10 gap-4">
					<Labels total={total} totals={totals} />
				</div>
			</div>
		</div>
	);
};
