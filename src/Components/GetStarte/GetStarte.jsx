import React from "react";
import css from "./GetStarte.css";
const GetStarte = () => {
	return (
		<div className="">
			<div
				style={{
					backgroundImage: `url("https://assets.website-files.com/647859f16f67fe92cf10d8c2/647859f16f67fe92cf10d8f5_image%2034.png")`,
					backgroundSize: "cover",
				}}
				className="w-full py-10 h-[350px] bg-gradient-to-r from-black to-[white] bg-transparent bg-opacity-75  "
			>
				<h1 className="lg:text-left lg:text-6xl text-center text-3xl ml-5 text-white font-bold">
					Get Started Today
					<br />{" "}
					<span className="italic font-semibold">Scale Without Limits</span>
				</h1>
				<p className="md:text-lg md:ml-6 text-center mt-3 lg:text-left font-semibold text-[#ADADA1]">
					With Aurora, you can focus on scale, growth and consistency. Our
					expert team of performance marketers <br />{" "}
					<span className="text-center lg:text-left">
						will work alongside you to guide you to results like you’ve never
						seen before.
					</span>
				</p>
				<div className="mb-5 mx-auto  ml-16 lg:ml-6 pt-7">
					<button className="py-[16px]   uppercase w-[200px]  rounded-md   text-white font-bold  bg-[#EB3449]  duration-500 hover:bg-[#de2439]">
						get started now
					</button>
				</div>
			</div>
		</div>
	);
};

export default GetStarte;
