import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";

// Register necessary Chart.js components and plugins
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

// Styles for the loader container
const loaderStyle = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	height: "200px",
};

// Styles for the spinning loader animation
const spinnerStyle = {
	border: "5px solid #f3f3f3",
	borderTop: "5px solid #3498db",
	borderRadius: "50%",
	width: "50px",
	height: "50px",
	animation: "spin 1s linear infinite",
};

// Default options for the line chart
const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
			labels: {
				color: "black",
				usePointStyle: false,
				paddingLeft: 36,
				pointStyleWidth: 18,
			},
		},
	},
	elements: {
		point: {
			radius: 0,
			maxPoints: 10,
		},
	},
};

// LineChart component receives data ('res') to render a line chart
const LineChart = ({ res }) => {
	// State to track whether the data is still loading
	const [loading, setLoading] = useState(true);

	// Simulate data loading with a delay
	useEffect(() => {
		const fetchData = () => {
			setTimeout(() => {
				setLoading(false); // Set loading to false after 2 seconds
			}, 2000);
		};
		fetchData();
	}, []);

	// Render the component
	if (!res && !loading) return null; // If there's no data and loading is done, return nothing
	return (
		<>
			{/* Show the circular loader while loading is true */}
			{loading && (
				<section style={loaderStyle}>
					<section style={spinnerStyle}></section>
				</section>
			)}

			{/* Render the line chart with the data once it is loaded */}
			{!loading && <Line data={res} options={options} />}
		</>
	);
};

export default LineChart;
