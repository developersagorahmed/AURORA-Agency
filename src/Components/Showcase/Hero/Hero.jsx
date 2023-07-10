import React from "react";

const Hero = () => {
	return (
		<div className="md:flex items-center">
			<div className="mt-20">
				<h1 className="text-5xl font-bold text-left text-[#000000]">
					Your Partner for Effortless <br /> Scaling{" "}
					<span className="text-[#EB3449]">without Limits</span>
				</h1>
				<p className="text-lg font-bold text-left w-[600px] mt-10 text-[#767676]">
					With our team of performance marketing experts, we help you structure
					your advertising, master compliance, expand to multi-channel and scale
					faster than ever before.
				</p>
				<p className="text-lg font-bold text-left w-[600px] mt-10 text-[#767676]">
					If you’re looking to 10x your business in the next few months, you’re
					in the perfect place.
				</p>
				<p className="text-lg mb-[50px] font-bold text-left w-[600px] mt-10 text-[#767676]">
					Sign up with us now for instant access...
				</p>
				<button className="py-[16px] uppercase w-[210px]  rounded-md hidden md:block  text-white font-bold  bg-[#EB3449] hover:bg-[#de2439]">
					get started now
				</button>
				<p className="text-base mb-[50px] italic font-bold text-left w-[600px] mt-6 text-[#767676]">
					Free Signup - Cancel Anytime
				</p>
			</div>
			<dir>
				<img
					className="w-full "
					src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647d685f865d5dee2defd4de_header-bg.png"
					alt=""
				/>
			</dir>
		</div>
	);
};

export default Hero;
