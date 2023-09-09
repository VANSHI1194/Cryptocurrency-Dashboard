import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useGetPortfolioDataQuery } from "../state/rtkApis";
import { dataForPortfolio } from "../utils/formatData";
import Loader from "./Loader";

ChartJS.register(ArcElement, Tooltip, Legend);

// Options for the chart
const options = {
	responsive: false,
	plugins: {
		legend: {
			position: "right",
			labels: {
				color: "black",
				paddingLeft: 36,
				pointStyleWidth: 18,
				usePointStyle: true,
			},
		},
	},
};

const Portfolio = () => {
	const [dataSet, setDataSet] = useState();
	const [value, setValue] = useState();
	const { globalCurrency } = useSelector((state) => state.globalState);
	const url = `/coins/markets?vs_currency=${globalCurrency}&ids=ethereum%2Cbitcoin%2Ctether%2C&order=market_cap_desc`;
	const { data: rawData, isLoading, isSuccess } = useGetPortfolioDataQuery(url);

	useEffect(() => {
		if (isSuccess && rawData) {
			// Process the fetched data and calculate total value
			const proccessData = () => {
				const { processedData, totalValue } = dataForPortfolio(rawData);
				setDataSet(processedData);
				setValue(totalValue);
			};

			proccessData();
		}
	}, [isSuccess, rawData]);

	return (
		<section className="bg-white shadow-md rounded-md w-full py-5 px-6 lg:px-4 xl:px-8 h-full space-y-4">
			<section className="text-2xl md:text-lg xl:text-xl font-bold flex justify-between">
				<p>Portfolio</p>
				{isLoading && (
					<section>
						<Loader />
					</section>
				)}
				<section>
					<span className="text-gray-600 text-xl md:text-lg xl:text-xl font-bold">
						Total Value{" "}
					</span>
					{/* Format and display total value */}
					<span className="text-base xl:text-lg font-semibold">
						{new Intl.NumberFormat("en-IN", {
							style: "currency",
							currency: `${globalCurrency}`,
						}).format(value / 1000000)}
					</span>
				</section>
			</section>
			<section className="w-full">
				{/* Render the pie chart */}
				{dataSet && (
					<Pie className="mx-auto w-72 h-72" data={dataSet} options={options} />
				)}
			</section>
		</section>
	);
};

export default Portfolio;
