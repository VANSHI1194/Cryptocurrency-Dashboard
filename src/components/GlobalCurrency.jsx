import { useState, useEffect } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { setGlobalCurrency } from "../state/globalStates";

// The GlobalCurrency component allows users to select the global currency for cryptocurrency data display.
const GlobalCurrency = () => {
	const [selectedCoin, setSelectedCoin] = useState("usd"); // Initially selected currency
	const [displayDropdown, setDisplayDropdown] = useState(false); // Controls the visibility of the currency selection dropdown
	const coins = ["usd", "eur", "inr"]; // List of available global currencies

	const dispatch = useDispatch();

	// Toggle the visibility of the currency selection dropdown
	const toggleDropdown = () => {
		setDisplayDropdown(!displayDropdown);
	};

	// Handle the user's selection of a global currency
	const handleCoinSelection = (coin) => {
		setSelectedCoin(coin); // Update the selected currency
		setDisplayDropdown(false); // Close the dropdown
	};

	// Use the selected currency to dispatch an action to update the global currency in the Redux store
	useEffect(() => {
		dispatch(setGlobalCurrency(selectedCoin));
	}, [selectedCoin, dispatch]);

	return (
		<section className="dropdown rounded-md w-fit h-full">
			<section className="flex w-fit h-full">
				<label
					tabIndex={0}
					className="btn px-5 text-lg focus:outline-none focus:ring-2 focus:ring-red-600 border border-gray-300 bg-white h-full shadow-md"
					onClick={toggleDropdown}
				>
					{selectedCoin}
					<BsFillCaretDownFill
						className={`h-3 w-3 transition-transform ${
							displayDropdown ? "transform rotate-180" : ""
						}`}
					/>
				</label>
			</section>

			{displayDropdown && (
				<ul
					tabIndex={0}
					className="dropdown-content z-[1] mt-1 shadow rounded-md w-full bg-white"
				>
					{coins.map((coin) => (
						<li
							className="cursor-pointer hover:bg-gray-300 text-center py-1.5"
							onClick={() => handleCoinSelection(coin)}
							key={coin}
						>
							{coin.toUpperCase()}
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

export default GlobalCurrency;
