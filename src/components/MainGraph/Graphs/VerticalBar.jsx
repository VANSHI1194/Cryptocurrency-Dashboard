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

// Register necessary Chart.js components and plugins
ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);

// VerticalBar component receives data ('res') to render a vertical bar chart
const VerticalBar = ({ res }) => {
	return (
		<>
			{/* Render the vertical bar chart with the provided data */}
			{res && <Bar data={res} />}
		</>
	);
};

export default VerticalBar;
