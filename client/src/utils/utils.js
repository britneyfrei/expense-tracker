export const categories = {
	"Living Expenses & Essentials": "rgb(255, 99, 132)",
	"Savings & Debt Reduction": "rgb(54, 162, 235)",
	"Discretionary": "rgb(255, 205, 86)",
};

export const groupBy = (data, prop) => {
	return data.reduce((acc, obj) => {
		const key = obj[prop];
		if (!acc[key]) {
			acc[key] = [];
		}
		acc[key].push(obj);
		return acc;
	}, {});
};

export const getSum = (array) => {
	return array.reduce((acc, item) => (acc += item), 0);
};

export const getPercent = (value, total) => {
	return (value / total) * 100;
};
