import Selector from "./Selector";
import { useGetExhangeDataQuery } from "../../state/rtkApis";
import { useEffect, useState } from "react";

// The Exchange component is responsible for handling currency exchange operations.
const Exchange = () => {
	// Query the exchange rate data using the RTK Query
	const { data, isSuccess, refetch } =
		useGetExhangeDataQuery("/exchange_rates");

	// State to store the list of available coins
	const [coins, setCoins] = useState();

	// State to store the input value for currency exchange
	const [inputValue, setInputValue] = useState();

	// State to store the selling details (coin and value)
	const [sell, setSell] = useState({ coinId: "btc", value: 1 });

	// State to store the buying details (coin and value)
	const [buy, setBuy] = useState({ coinId: "btc", value: 1 });

	// State to store the result of the currency exchange
	const [result, setResult] = useState();

	// Handle changes in the "Buy" section
	const handleBuy = (value) => {
		setResult(null);
		setBuy(value);
	};

	// Handle changes in the "Sell" section
	const handleSell = (value) => {
		setResult(null);
		setSell(value);
	};

	// Handle changes in the input value for currency exchange
	const handleExchangeValueChange = (e) => {
		setInputValue(e.target.value);
	};

	// Handle the currency exchange button click
	const handleExchangeButton = () => {
		// Calculate the exchange result and update the state
		const toBitcoin = (1 / sell.value) * inputValue;
		const value = (toBitcoin * buy.value).toFixed(2);
		setResult(value);

		// Trigger a data refetch
		refetch();
	};

	// Load the list of available coins when the data is successfully fetched
	useEffect(() => {
		if (isSuccess && data) {
			const keyValuePairs = [];
			Object.entries(data.rates).forEach(([key, value]) => {
				keyValuePairs.push({ key, value });
			});
			setCoins(keyValuePairs);
		}
	}, [isSuccess, data]);

	return (
		<section className="flex flex-col gap-3 justify-between py-4 px-5 lg:px-3 xl:px-9 h-72 md:h-full rounded-md shadow-md bg-white">
			{/* Section title */}
			<p className="text-2xl md:text-lg xl:text-xl font-bold">Exchange Coins</p>

			{/* Sell section */}
			<section className="w-full flex items-center">
				<section className="flex items-center gap-5">
					<p className="text-base xl:text-lg font-semibold text-red-500">
						SELL
					</p>
					{/* Component to select the coin to sell */}
					<Selector coins={coins} handleChange={handleSell} />
				</section>
				<section className="ml-4">
					{/* Input field for entering the amount to sell */}
					<input
						className="border w-28 xl:w-36 border-gray-300 py-2 text-center rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/70"
						placeholder="0.00"
						id="enterValue"
						type="number"
						step="1"
						value={inputValue}
						onChange={handleExchangeValueChange}
					/>
				</section>
			</section>

			{/* Buy section */}
			<section className="w-full flex items-center">
				<section className="flex items-center gap-5">
					<p className="text-base xl:text-lg mr-0.5 text-green-600 font-semibold">
						BUY
					</p>
					{/* Component to select the coin to buy */}
					<Selector coins={coins} handleChange={handleBuy} />
				</section>
				{/* Display the result of the exchange */}
				<p className="text-[#4c9d8a] text-lg font-semibold px-4 w-28 xl:w-36">
					{result && result + ` ${buy.coinId}`}
				</p>
			</section>

			{/* Button to initiate the exchange */}
			<button
				className="bg-blue-600 max-w-fit rounded-md text-white border-blue-600 py-2 px-16 mx-auto"
				onClick={handleExchangeButton}
			>
				Exchange
			</button>
		</section>
	);
};

export default Exchange;
