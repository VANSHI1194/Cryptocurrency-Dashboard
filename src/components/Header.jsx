import React from "react";

// The Header component renders a logo in a centered section with a maximum width.
const Header = () => {
	return (
		// This section sets the maximum width, centers the content horizontally,
		// and provides vertical padding.
		<section className="max-w-[1440px] mx-auto py-3">
			{/* This image displays the AlmaBetter logo with specific styling. */}
			<img
				className="h-6" // Set the height of the logo.
				src="https://www.almabetter.com/_next/image?url=https%3A%2F%2Falmablog-media.s3.ap-south-1.amazonaws.com%2FAlma_Better_Logo_4d9d929fe6.png&w=256&q=75" // URL of the logo image.
				alt="logo" // Alternative text for the logo image.
			/>
		</section>
	);
};

export default Header;
