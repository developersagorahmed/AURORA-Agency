import React from "react";
import Cart from "./Cart/Cart";

const OurClient = () => {
	return (
		<div data-aos="fade-up"
			className="h-full w-full pb-24"
			style={{
				backgroundImage: `url("https://assets.website-files.com/647859f16f67fe92cf10d8c2/647859f16f67fe92cf10d8e1_bg.png")`,
				backgroundSize: "cover",
			}}
		>
			<h1 className="lg:text-[44px] text-[30px] pt-24 pb-11 text-[#000000] font-bold">
				Our Clients Keep Coming Back
			</h1>
			<div className="grid py-10 grid-cols-1 lg:grid-cols-3">
				<div className="pb-10 lg:pb-0">
					<div className="flex justify-between">
						<img
							className="w-6 h-6 "
							src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647859f16f67fe92cf10d8f9_quotation.png"
							alt=""
						/>
					</div>
					<div className="">
						<h1 className="text-xl text-left font-bold text-[#1F2559] ml-6">
							Zenith Agency
						</h1>
						<p className="text-left text-sm ml-6 w-[300px] text-[#1f2559b3]">
							Working with Aurora was a game-changer for our TikTok setup. Using
							their account structuring and guides we saw a 200% increase in
							views in 2 months. We hardly made changes to campaign-level
							details, so we were very impressed.
						</p>
					</div>
				</div>
				<div className="pb-10 lg:pb-0">
					<div className="flex justify-between">
						<img
							className="w-6 h-6 "
							src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647859f16f67fe92cf10d8f9_quotation.png"
							alt=""
						/>
					</div>
					<div className="">
						<h1 className="text-xl text-left font-bold text-[#1F2559] ml-6">
							Glow Beauty
						</h1>
						<p className="text-left text-sm ml-6 w-[300px] text-[#1f2559b3]">
							Aurora helped us with our Google Ads. They provided us with a lot
							of assistance even after we had dealt with account bans before
							from other agencies. We were also able to get a lot of cashback on
							campaigns which really added up.
						</p>
					</div>
				</div>
				<div className="pb-10 lg:pb-0">
					<div className="flex justify-between">
						<img
							className="w-6 h-6"
							src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647859f16f67fe92cf10d8f9_quotation.png"
							alt=""
						/>
					</div>
					<div className="">
						<h1 className="text-xl text-left font-bold text-[#1F2559] ml-6">
							Theo R.
						</h1>
						<p className="text-left text-sm ml-6 w-[300px] text-[#1f2559b3]">
							A very recommended team to work with no matter which platform
							you’re advertising on. We joined them for support with our
							dropshipping Facebook campaigns and ended up scaling across to
							TikTok and Google with their support.
						</p>
					</div>
				</div>

				{/* <Cart></Cart>
				<Cart></Cart>
				<Cart></Cart> */}
			</div>
		</div>
	);
};

export default OurClient;
