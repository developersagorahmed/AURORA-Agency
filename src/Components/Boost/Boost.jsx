import React from "react";
import css from "./Boost.css";

const Boost = () => {
	return (
		<div data-aos="fade-up" className=" container pt-10 ">
			<h1 className="text-[30px] text-center md:text-4xl  font-bold md:text-left text-[#000000]">
				Boost Conversions, Lower Costs, Improve <br /> Stability and Beat
				Competition
			</h1>
			<p className="text-[15px] text-center lg:text-lg font-bold lg:text-left lg:w-[1000px] mt-4 text-[#767676]">
				Our clients enjoy a smooth, consistent advertising experience when
				working with us. We have a simple goal: reduce <br /> your costs and
				improve your profitability.
			</p>
			<div
				className=""
				style={{
					backgroundImage: `url("https://assets.website-files.com/647859f16f67fe92cf10d8c2/647859f16f67fe92cf10d8e0_path.png")`,
					backgroundSize: "cover",
				}}
			>
				<div className="lg:pb-[130px] lg:pt-[300px] grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-5 ">
					<div className="flex justify-between p-3 lg:p-6  items-center w-full lg:w-[588px] lg:h-[144px] bg-white shadow-2xl rounded-lg">
						<img src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647d89c4085b1d0a2c791579_icon-trophy.png" />
						<div className="ml-3">
							<h3 className="text-xl font-bold text-left">Lower CPA & CPM</h3>
							<p className="text-left text-[#727171] text-[15px] ">
								Through proper creative testing and campaign structuring, you
								can almost guarantee up to 45% lower CPM and CPA.
							</p>
						</div>
					</div>
					<div className="flex justify-between p-3 lg:p-6  items-center w-full lg:w-[588px] lg:h-[144px] bg-white shadow-2xl rounded-lg">
						<img src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647d89c4085b1d0a2c791579_icon-trophy.png" />
						<div className="ml-3">
							<h3 className="text-xl font-bold text-left">
								Improved Stability
							</h3>
							<p className="text-left text-[#727171] text-[15px] ">
								Compliance is always one of our priorities. We believe the key
								to a sustainable business is meeting advertising requirements.
							</p>
						</div>
					</div>
					<div className="flex justify-between p-3 lg:p-6  items-center w-full lg:w-[588px] lg:h-[144px] bg-white shadow-2xl rounded-lg">
						<img src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647d89c4085b1d0a2c791579_icon-trophy.png" />
						<div className="ml-3">
							<h3 className="text-xl font-bold text-left">
								Increased Profitability
							</h3>
							<p className="text-left text-[#727171] text-[15px] ">
								With cheaper results, better campaign structuring,
								sustainability and guidance - profitability will skyrocket.
							</p>
						</div>
					</div>
					<div className="flex justify-between p-3 lg:p-6  items-center w-full lg:w-[588px] lg:h-[144px] bg-white shadow-2xl rounded-lg">
						<img src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647d89c4085b1d0a2c791579_icon-trophy.png" />
						<div className="ml-3">
							<h3 className="text-xl font-bold text-left">Marketing Guides</h3>
							<p className="text-left text-[#727171] text-[15px] ">
								Our team of well seasoned marketing experts have a range of
								guides and experience to ensure you always perform.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Boost;
