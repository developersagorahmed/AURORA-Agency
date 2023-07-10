import React from "react";

const Showcase = () => {
	return (
		<div data-aos="fade-up">
			<div className=" lg:flex lg:justify-between items-center">
				<img
					className=" w-[100px]   mt-7 mx-auto md:mx-0"
					src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647859f16f67fe92cf10d8cb_logo.png"
					alt=""
				/>
				<p className="text-sm mt-7 text-center lg:text-lg font-semibold">
					We Are Currently Updating Our Site,{" "}
					<span className="font-normal">Thanks for Your Patience</span>
					<span className="text-[#EB3449]  font-semibold">!</span>
				</p>
			</div>
		</div>
	);
};

export default Showcase;
