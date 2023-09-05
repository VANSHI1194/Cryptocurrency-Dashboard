import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register required Chart.js components and plugins
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

// Default options for the horizontal bar chart
export const options = {
	indexAxis: "y", // Display bars along the y-axis
	elements: {
		bar: {
			borderWidth: 2, // Customize the border width of the bars
		},
	},
	responsive: true, // Make the chart responsive to screen size
	plugins: {
		legend: {
			position: "top", // Position the legend at the top of the chart
		},
	},
};

// HorizontalBar component receives data ('res') to render a horizontal bar chart
const HorizontalBar = ({ res }) => {
	return (
		<>
			{/* Render the horizontal bar chart using the provided data and options */}
			{res && <Bar data={res} options={options} />}
		</>
	);
};

export default HorizontalBar;
