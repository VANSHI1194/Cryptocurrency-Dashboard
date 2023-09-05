import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { toPercent } from "../../utils/utils";

// The SingleItem component displays a single cryptocurrency item in the sidebar.
const SingleItem = ({ globalCurrency, coin }) => {
	return (
		<section className="flex items-center justify-between px-4 border-b py-2">
			<section className="flex gap-3 items-center">
				<section className="w-7 h-7 bg-black rounded-full">
					{/* Display the cryptocurrency's image */}
					<img src={coin.image} alt={coin.name} />
				</section>
				<section className="flex flex-col">
					{/* Display the cryptocurrency's name */}
					<p className="text-base xl:text-lg font-semibold">{coin.name}</p>
					<section className="text-sm font-semibold text-gray-500">
						Mkt.Cap
						<span>
							{/* Display the cryptocurrency's market capitalization in the selected global currency */}
							{new Intl.NumberFormat("en-IN", {
								style: "currency",
								currency: globalCurrency,
							}).format(coin.market_cap / 1000000)}
						</span>
					</section>
				</section>
			</section>
			<section
				className={`flex pl-12 pr-4 items-center gap-2 ${
					coin.price_change_percentage_24h < 0
						? "text-rose-600"
						: "text-green-600"
				}`}
			>
				{/* Display an arrow icon indicating price change direction */}
				{coin.price_change_percentage_24h < 0 ? <BiDownArrow /> : <BiUpArrow />}

				{/* Display the percentage change in cryptocurrency price over the last 24 hours */}
				{toPercent(coin.price_change_percentage_24h)}
			</section>
		</section>
	);
};

export default SingleItem;
