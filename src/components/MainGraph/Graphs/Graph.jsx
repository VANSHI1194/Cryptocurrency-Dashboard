import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { processedData } from "../../../utils/formatData";

import VerticalBar from "./VerticalBar";
import LineChart from "./LineChart";
import HorizontalBar from "./HorizontalBar";

// Define a mapping between graph types and their corresponding components
const graphToRender = {
	VerticalBar: VerticalBar,
	LineChart: LineChart,
	HorizontalBar: HorizontalBar,
};

const Graph = ({ type }) => {
	// State to store the processed data for rendering the chart
	const [res, setRes] = useState(null);

	// Retrieve the selected coins from the Redux store
	const coins = useSelector((state) => state.globalState.selectedCoins);

	// Retrieve coin history data and status from the Redux store
	const { coinHistory, status } = useSelector((state) => state.history);

	// Get the appropriate chart component based on the 'type' prop
	const ChartComponent = graphToRender[type];

	useEffect(() => {
		// Function to fetch and process data when coins or coin history change
		const fetchData = async () => {
			try {
				if (
					coinHistory.length > 0 &&
					coins.length > 0 &&
					coinHistory.length === coins.length
				) {
					// Format data and set the result in the component state
					const result = await processedData(coinHistory, coins);
					setRes(result);
				}
			} catch (error) {
				console.error("Error:", error);
			}
		};

		// Call the fetchData function when 'coins' or 'coinHistory' change
		fetchData();
	}, [coins, coinHistory]);

	return (
		<>
			{/* Render the chart component if 'res' (processed data) is available */}
			{res && <ChartComponent res={res} />}
		</>
	);
};

export default Graph;
