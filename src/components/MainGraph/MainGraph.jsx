import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Duration from "./Duration";
import SelectType from "./SelectType";
import MultiSelector from "./MultiSelector";
import { useEffect } from "react";
import { getCryptoHistory } from "../../state/historySlice";
import Graph from "./Graphs/Graph";

// The MainGraph component serves as the main container for displaying cryptocurrency data.
const MainGraph = () => {
	// State to track the selected number of days for data retrieval
	const [days, setDays] = useState(1);

	// State to track the type of graph to render
	const [graphType, setGraphType] = useState("LineChart");

	// Redux dispatch function to trigger actions
	const dispatch = useDispatch();

	// Retrieve global currency and selected coins from the Redux store
	const { globalCurrency } = useSelector((state) => state.globalState);
	const { selectedCoins } = useSelector((state) => state.globalState);

	// Function to update the type of graph to render
	const updateGraphToRender = (type) => {
		setGraphType(type);
	};

	// Function to update the selected number of days
	const updateDaysAndInterval = (days) => {
		setDays(days);
	};

	// Fetch cryptocurrency history data based on selected options and state changes
	useEffect(() => {
		try {
			dispatch(getCryptoHistory({ selectedCoins, globalCurrency, days }));
		} catch (error) {
			console.error("Error:", error);
		}
	}, [days, dispatch, selectedCoins, globalCurrency]);

	return (
		<section className="border border-gray-300 rounded-md shadow-md py-2 px-4">
			{/* Top section containing duration selection and graph type options */}
			<section className="flex flex-col lg:flex-row items-center justify-between">
				{/* Component to select the duration */}
				<Duration updateDaysAndInterval={updateDaysAndInterval} />

				{/* Section for selecting graph type and additional options */}
				<section className="flex items-center gap-10">
					{/* Component to select the type of graph to render */}
					<SelectType updateGraphToRender={updateGraphToRender} />

					{/* Component for multi-selection options (if applicable) */}
					<div className="w-full max-w-[180px] xl:max-w-xs">
						<MultiSelector />
					</div>
				</section>
			</section>

			{/* Display the selected graph type */}
			<Graph type={graphType} />
		</section>
	);
};

export default MainGraph;
