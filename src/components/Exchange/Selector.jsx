import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

// The Selector component allows users to select a coin from a dropdown list.
// It receives an array of coins and a handleChange function as props.

const Selector = ({ coins, handleChange }) => {
	// State to track the currently selected coin's name.
	const [selectedCoin, setSelectedCoin] = useState("Bitcoin");

	// State to control the visibility of the dropdown.
	const [displayDropdown, setDisplayDropdown] = useState(false);

	// Toggle the visibility of the dropdown when the label is clicked.
	const toggleDropdown = () => {
		setDisplayDropdown(!displayDropdown);
	};

	// Handle a coin selection and update the selected coin and value.
	const handleClick = (coinId, name, value) => {
		setSelectedCoin(name);
		handleChange({ coinId, value });
		setDisplayDropdown(false); // Close the dropdown after selection.
	};

	return (
		<section className="dropdown dropdown-top">
			{/* Label that acts as a button to open/close the dropdown */}
			<label
				tabIndex={0}
				className="btn px-5 text-base focus:outline-none focus:ring-2 focus:ring-blue-500/70 capitalize"
				onClick={toggleDropdown}
			>
				{selectedCoin}
				{/* Caret icon that rotates when the dropdown is open */}
				<BsFillCaretDownFill
					className={`h-3 w-3 transition-transform ${
						displayDropdown ? "transform rotate-180" : ""
					}`}
				/>
			</label>

			{/* The dropdown menu */}
			{displayDropdown && (
				<ul
					tabIndex={0}
					className="dropdown-content z-[1] mt-1 shadow rounded-md min-w-fit w-7 bg-white h-72 overflow-y-scroll scrollbar-hide"
				>
					{/* Map over the list of coins and create a list item for each */}
					{coins.map((coin) => (
						<li
							className="cursor-pointer hover:bg-gray-300 text-center py-1.5 px-2 w-full"
							onClick={() =>
								handleClick(coin.key, coin.value.name, coin.value.value)
							}
							key={coin.key}
						>
							{coin.value.name}
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

export default Selector;
