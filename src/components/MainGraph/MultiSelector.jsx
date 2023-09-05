import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MultiSelect } from "react-multi-select-component";
import { setSelectedCoins } from "../../state/globalStates";

// MultiSelector component allows users to select multiple coins from a list
const MultiSelector = () => {
	// State to track the selected coin options
	const [selected, setSelected] = useState([]);

	// Retrieve the list of available coins from the Redux store
	const { coinsList } = useSelector((state) => state.globalState);

	// Prepare the options for the MultiSelect component
	const options = coinsList.map((coin) => {
		return { label: coin.name, value: coin.id };
	});

	// Redux dispatch function to update the selected coins list in the global state
	const dispatch = useDispatch();

	// Handle the selection of coins and update the selected options
	const handleSelection = (selectedOptions) => {
		setSelected(selectedOptions);

		// Dispatch an action to update the selected coins list in the global state
		dispatch(setSelectedCoins(selectedOptions));
	};

	return (
		<section className="w-full max-w-md p-4">
			{/* Render the MultiSelect component with the available options and selected values */}
			<MultiSelect
				options={options}
				value={selected}
				onChange={handleSelection}
				labelledBy="Select" // ARIA label for accessibility
				hasSelectAll={false}
			/>
		</section>
	);
};

export default MultiSelector;
