import Exchange from "./components/Exchange/Exchange";
import GlobalCurrency from "./components/GlobalCurrency";
import Header from "./components/Header";
import MainGraph from "./components/MainGraph/MainGraph";
import Portfolio from "./components/Portfolio";
import Search from "./components/SearchBar/Search";
import SideBar from "./components/Sidebar/SideBar";

function App() {
	return (
		<section className="flex flex-col w-full h-screen gap-5">
			{/* Header */}
			<header className="w-full h-[6vh] shadow-lg">
				<Header />
			</header>

			{/* Main */}
			<main className="bg-[#f3f8ff] max-w-[1440px] mx-auto lg:h-[800px] xl:h-[900px] w-full flex flex-col lg:flex-row gap-6 px-4 py-5">
				{/* Left */}
				<section className="w-full lg:w-[70%] flex-1 h-full flex flex-col justify-between gap-3">
					<section className="flex gap-5">
						{/* Dropdown for selecting currency */}
						<GlobalCurrency />

						{/* Search */}
						<Search />
					</section>

					<section className="w-full bg-white">
						{/* Main Graph */}
						<MainGraph className="" />
					</section>

					<section className="flex flex-col md:flex-row w-full gap-5">
						{/* Portofolio Section - Pie Chart */}
						<section className="w-full md:w-1/2">
							<Portfolio />
						</section>

						{/* Exchange Section */}
						<section className="w-full md:w-1/2">
							<Exchange />
						</section>
					</section>
				</section>

				{/* Right */}
				{/* Side Bar - Displaying All Cryptocurrencies according to Market Cap */}
				<section className="h-[800px] lg:h-full overflow-y-clip bg-white border rounded-md shadow-md">
					<h1 className="text-xl md:text-2xl lg:text-xl font-bold py-2 border-b text-center">
						Cryptocurrency by market Cap
					</h1>
					<section className="h-full overflow-y-scroll scrollbar-hide">
						<SideBar />
					</section>
				</section>
			</main>
		</section>
	);
}

export default App;
