import React from "react";

const Hero = () => {
	return (
		<div data-aos="fade-up">
			<div className="md:flex overflow-x-hidden items-center">
				<div className="mt-6 lg:mt-20">
					<h1 className="lg:text-5xl text-2xl text-center lg:text-left font-bold md:text-left text-[#000000]">
						Your Partner for Effortless <br /> Scaling{" "}
						<span className="text-[#EB3449]">without Limits</span>
					</h1>
					<p className="text-lg font-bold text-center lg:text-left w-full lg:w-[600px] mt-10 text-[#767676]">
						With our team of performance marketing experts, we help you
						structure your advertising, master compliance, expand to
						multi-channel and scale faster than ever before.
					</p>
					<p className="text-lg  font-bold text-center lg:text-left  w-full lg:w-[600px]  mt-10 text-[#767676]">
						If you’re looking to 10x your business in the next few months,
						you’re in the perfect place.
					</p>
					<p className="text-lg mb-[50px] font-bold text-center lg:text-left  w-full lg:w-[600px]  mt-10 text-[#767676]">
						Sign up with us now for instant access...
					</p>
					<div className="lg:text-left text-center">
						<button className="py-[16px]  uppercase w-[210px]  rounded-md   text-white font-bold  bg-[#EB3449] duration-500 hover:bg-[#de2439]">
							get started now
						</button>
					</div>
					<p className="text-base mb-[50px] italic font-bold text-center lg:text-left lg:w-[600px] mt-6 text-[#767676]">
						Free Signup - Cancel Anytime
					</p>
				</div>
				<div>
					<img
						className="w-full "
						src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647d685f865d5dee2defd4de_header-bg.png"
						alt=""
					/>
				</div>
			</div>
			<div className="  grid grid-cols-3 gap-5 px-5 my-4 shadow-md md:grid-cols-4 lg:grid-cols-6">
				<img
					src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647d8323f36d2822c5fa56a1_meta.png"
					alt=""
				/>
				<img
					src="
https://assets.website-files.com/647859f16f67fe92cf10d8c2/647d832466a1b3328b13f8b8_tiktok.png"
					alt=""
				/>
				<img
					src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647d8323b0b8c32ec567d9eb_google-partner.png"
					alt=""
				/>
				<img
					src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647d8323b215be1d5cfa4cfe_snapchat.png"
					alt=""
				/>
				<img
					src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647d8324c08c36dc4feeb497_taboola.png"
					alt=""
				/>
				<img
					src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647d8324b8b8710d45d73118_outbrain.png"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Hero;
