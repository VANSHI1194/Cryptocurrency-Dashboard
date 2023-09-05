import { useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

// An array containing different chart types with their initial checked state
const chartsArray = [
	{
		type: "LineChart",
		checked: true,
	},
	{
		type: "VerticalBar",
		checked: false,
	},
	{
		type: "HorizontalBar",
		checked: false,
	},
];

// SelectType component allows users to select a chart type to render
const SelectType = ({ updateGraphToRender }) => {
	// State to control the visibility of the chart type dropdown
	const [displayDropdown, setDisplayDropdown] = useState(false);

	// State to manage the list of available chart types and their checked states
	const [allCharts, setAllCharts] = useState(chartsArray);

	// State to track the currently selected chart type
	const [selectedGraph, setSelectedGraph] = useState("LineChart");

	// Toggle the visibility of the dropdown when the label is clicked
	const toggleDropdown = () => {
		setDisplayDropdown(!displayDropdown);
	};

	// Handle chart type selection and update the selected chart type
	const handleGraphSelection = (type) => {
		// Update the checked state of the chart types
		const updatedCharts = allCharts.map((chart) => {
			if (chart.type === type) {
				return { ...chart, checked: !chart.checked };
			}
			return { ...chart, checked: false };
		});

		// Update the component state with the selected chart type
		setAllCharts(updatedCharts);
		setSelectedGraph(type);

		// Call the provided callback function to update the graph type
		updateGraphToRender(type);

		// Close the dropdown
		setDisplayDropdown(false);
	};

	return (
		<section className="dropdown">
			<section className="flex w-fit">
				{/* Label that acts as a button to open/close the dropdown */}
				<label
					tabIndex={0}
					className="btn px-5 text-lg focus:outline-none focus:ring-2 focus:ring-red-600 capitalize"
					onClick={toggleDropdown}
				>
					{selectedGraph}
					<BsFillCaretDownFill
						className={`h-3 w-3 transition-transform ${
							displayDropdown ? "transform rotate-180" : ""
						}`}
					/>
				</label>
			</section>

			{/* Dropdown menu for selecting chart types */}
			{displayDropdown && (
				<ul
					tabIndex={0}
					className="dropdown-content z-[1] mt-1 shadow rounded-md w-full bg-white"
				>
					{chartsArray.map((item) => (
						<li
							className="cursor-pointer hover:bg-gray-300 text-center py-1.5"
							onClick={() => handleGraphSelection(item.type)}
							key={item.type}
						>
							{item.type}
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

export default SelectType;
