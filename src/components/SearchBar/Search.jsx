import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import Suggestions from "./Suggestions";

// The Search component allows users to search for cryptocurrencies.
const Search = () => {
	// Get the list of cryptocurrencies from the Redux store
	const { coinsList } = useSelector((state) => state.globalState);

	// State to store the list of cryptocurrencies for searching
	const [coins, setCoins] = useState();

	// State to store the current search input value
	const [searchVal, setSearchVal] = useState();

	// State to store the suggestions based on the search input
	const [suggestions, setSuggestions] = useState();

	// State to control the display of search suggestions
	const [displaySuggestions, setDisplaySuggestions] = useState();

	// State to store the selected coin
	const [selectedCoin, setSelectedCoin] = useState("");

	// Function to perform a search based on the input value
	const performSearch = (inputValue) => {
		return coins.filter(({ id, name }) =>
			name.toLowerCase().includes(inputValue.toLowerCase())
		);
	};

	// Handle changes in the search field
	const handleSearchField = (e) => {
		const input = e.target.value;
		setSearchVal(input);

		// Update the suggestions based on the input
		const newSuggestions = input ? performSearch(input) : [];
		setSuggestions(newSuggestions);

		// Control the display of suggestions
		setDisplaySuggestions(newSuggestions.length > 0);
	};

	// Handle Enter key press for selecting a coin from suggestions
	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			const obj = {
				id: searchVal.toLowerCase(),
				name: searchVal.charAt(0).toUpperCase() + searchVal.slice(1),
			};
			const foundObject = coins.find((coin) => coin.id === obj.id);
			if (foundObject) {
				setSelectedCoin(foundObject);

				// Hide suggestions after selecting a coin
				setDisplaySuggestions(false);
			} else {
				// Display an error toast if the cryptocurrency is not found
				toast.error("Crypto Not found");
				return;
			}
		}
	};

	// Initialize the list of cryptocurrencies when the coinsList changes
	useEffect(() => {
		setCoins(
			coinsList.map((coin) => ({
				id: coin.id,
				name: coin.name,
			}))
		);
	}, [coinsList]);

	return (
		<section className="shadow-md rounded-lg relative w-full">
			{/* Input field for searching cryptocurrencies */}
			<input
				type="text"
				value={searchVal}
				onChange={handleSearchField}
				onKeyDown={handleKeyPress}
				placeholder="Search..."
				className="w-full py-3 px-3 rounded-lg shadow-md border focus:outline-none focus:ring-2 focus:ring-red-600"
			/>

			{/* Display search suggestions when available */}
			{displaySuggestions && (
				<Suggestions
					suggestions={suggestions}
					setSearchVal={setSearchVal}
					setDisplaySuggestions={setDisplaySuggestions}
				/>
			)}

			{/* Toast notifications for error messages */}
			<Toaster />
		</section>
	);
};

export default Search;
