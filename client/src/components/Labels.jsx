import { categories, getPercent } from "../utils/utils";

export const Labels = ({ total, totals }) => {
	return (
		<div>
			{totals.map((category) => (
				<div key={category[0]} className="flex justify-between py-1">
					<div className="flex gap-2">
						<div
							className="w-2 h-2 rounded py-3"
							style={{ background: categories[category[0]] }}
						></div>
						<h3 className="text-md">{category[0]}</h3>
					</div>
					<h3 className="font-bold">
						{category[1] ? getPercent(category[1], total).toFixed() : 0}%
					</h3>
				</div>
			))}
		</div>
	);
};
