// Define an array of button data with different time durations
const buttonData = [
	{ labelText: "1D", value: 1 },
	{ labelText: "1W", value: 7 },
	{ labelText: "1M", value: 30 },
	{ labelText: "6M", value: 180 },
	{ labelText: "1Y", value: 365 },
];

// Duration component allows users to select a time duration option
const Duration = ({ updateDaysAndInterval }) => {
	// Handle the button click to update the selected time duration
	const handleClick = (value) => {
		updateDaysAndInterval(value);
	};

	return (
		<section className="space-x-2 lg:space-x-3">
			{/* Map over the button data and create buttons for each duration option */}
			{buttonData.map((item, idx) => (
				<button
					key={idx}
					onClick={() => handleClick(item.value)}
					className="text-xs md:text-base rounded-lg text-black bg-gray-100 px-4 py-2 focus:font-medium focus:bg-blue-100 focus:ring-2 focus:ring-blue-600 hover:font-medium hover:bg-red-100 hover:ring-2 hover:ring-red-600 border border-gray-300"
				>
					{item.labelText}
				</button>
			))}
		</section>
	);
};

export default Duration;
