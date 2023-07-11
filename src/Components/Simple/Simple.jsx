import React from "react";

const Simple = () => {
	return (
		<main data-aos="fade-up" className="container">
			<div className="grid items-center my-20 md:grid-cols-2">
				<div>
					<h1 className="text-3xl text-center lg:text-left font-bold md:text-6xl">
						Simple <span className="text-[#EB3449]">3-Step</span> <br /> Sign Up
						Process
					</h1>
					<p className="text-[#ADADAD] text-center lg:text-left text-lg font-semibold my-5">
						We believe in simplifying complex processes. Our 3-Step sign-up{" "}
						<br /> process is straightforward and hassle-free, enabling you to
						start <br /> advertising immediately.
					</p>
					<button className="py-[16px] ml-20 lg:ml-0 mb-6 uppercase w-[200px]  rounded-md   text-white font-bold  bg-[#EB3449]  duration-500 hover:bg-[#de2439]">
						get started now
					</button>
				</div>
				<div className="">
					<div className="flex items-center gap-5 p-3 border">
						<div>
							<img
								src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647d89c5b215be1d5cfec580_s-1.png"
								alt=""
							/>
						</div>
						<div>
							<h2 className="text-[#1f2559] text-xl font-bold mb-3">
								Sign Up to the Aurora App
							</h2>
							<p className="text-[#ADADAD]">
								Click Get Started, create your account and select which
								platforms you would like to start using.
							</p>
						</div>
					</div>
					<img
						className="w-[70px] mx-auto"
						src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647859f16f67fe92cf10d8e4_left-line.png"
						alt=""
					/>
					<div className="flex items-center gap-5 p-3 border">
						<div>
							<img
								src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647d89c5f7de8d62ea298610_s-2.png"
								alt=""
							/>
						</div>
						<div>
							<h2 className="text-[#1f2559] text-xl font-bold mb-3">
								Top-Up Your Account Balance
							</h2>
							<p className="text-[#ADADAD]">
								Add funds to your Aurora App balance through transfer, Wise,
								Payoneer, Credit Card and more..
							</p>
						</div>
					</div>
					<img
						className="w-[70px] mx-auto"
						src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647859f16f67fe92cf10d8e5_right-line.png"
						alt=""
					/>
					<div className="flex items-center gap-5 p-3 mb-10 border">
						<div>
							<img
								src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647d89c4f5295eb75e719ff8_s-3.png"
								alt=""
							/>
						</div>
						<div>
							<h2 className="text-[#1f2559] text-xl font-bold mb-3">
								Get Access to Our Services
							</h2>
							<p className="text-[#ADADAD]">
								Enter the required information for access to our entire app,
								including guides and services which can help from day one.
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Simple;
