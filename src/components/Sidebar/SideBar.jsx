import { useEffect } from "react";
import { useGetSideBarDataQuery } from "../../state/rtkApis";
import SingleItem from "./SingleItem";
import { useDispatch, useSelector } from "react-redux";
import { setCoinsList } from "../../state/globalStates";
import Loader from "../Loader";

// The SideBar component fetches and displays a list of cryptocurrencies in the sidebar.
const SideBar = () => {
	// Get the selected global currency from the Redux store
	const { globalCurrency } = useSelector((state) => state.globalState);

	// Initialize the Redux dispatch function
	const dispatch = useDispatch();

	// Construct the API URL to fetch cryptocurrency data based on the selected global currency
	const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${globalCurrency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`;

	// Use the RTK Query hook to fetch data from the specified API endpoint
	const {
		data: coins,
		isSuccess,
		isError,
		error,
		isLoading,
	} = useGetSideBarDataQuery(url);

	// Update the Redux store with the fetched list of cryptocurrencies
	useEffect(() => {
		if (isSuccess && coins) {
			dispatch(setCoinsList(coins));
		} else if (isError) {
			console.log(error);
		}
	}, [dispatch, isSuccess, coins, isError, error]);

	return (
		<section className="space-y-2">
			{isLoading && (
				<section>
					<Loader />
				</section>
			)}
			{/* Render each cryptocurrency item in the sidebar */}
			{coins &&
				coins.map((coin, idx) => (
					<SingleItem key={idx} coin={coin} globalCurrency={globalCurrency} />
				))}
		</section>
	);
};

export default SideBar;
