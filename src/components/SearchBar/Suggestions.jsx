import { useDispatch } from "react-redux";
import { setSelectedCoins } from "../../state/globalStates";

// The Suggestions component displays a list of suggestions based on the user's input.
const Suggestions = ({ suggestions, setSearchVal, setDisplaySuggestions }) => {
	const dispatch = useDispatch();

	// Handle when a suggestion is clicked
	const handleSuggestionClick = (suggestion) => {
		// Set the search input value to the clicked suggestion's name
		setSearchVal(suggestion.name);
		dispatch(
			setSelectedCoins([
				{
					label: suggestion.name,
					value: suggestion.id,
				},
			])
		);
		console.log(suggestion);
		// Hide the suggestions dropdown
		setDisplaySuggestions(false);
	};

	return (
		<>
			{/* Display the list of suggestions as an absolute positioned dropdown */}
			<ul className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
				{suggestions.map((suggestion) => (
					<li
						key={suggestion.id}
						className="py-2 px-3 cursor-pointer hover:bg-red-100 hover:font-medium"
						onMouseDown={() => handleSuggestionClick(suggestion)}
					>
						{suggestion.name}
					</li>
				))}
			</ul>
		</>
	);
};

export default Suggestions;
