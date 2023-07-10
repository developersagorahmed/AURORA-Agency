import React from "react";

const Start = () => {
	return (
		<div
			className="mt-10 rounded-xl bg-gradient-to-r from-black via-[#fafafa] to-[#ffffff] bg-opacity-25  flex justify-between items-center px-10"
			style={{
				height: "205px",
				backgroundImage: `url("https://assets.website-files.com/647859f16f67fe92cf10d8c2/647859f16f67fe92cf10d8fb_image%2034.png")`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
			}}
		>
			<div>
				<h1 className="text-4xl font-bold text-white text-left">
					Get Started Today -{" "}
					<span className="italic">Scale Without Limits</span>
				</h1>
				<p className="text-lg text-[#a9a99a]">
					It’s time to skyrocket your online presence. Our expert team,
					infrastructure and guidance is waiting for you to get started. Sign up
					today for instant access inside of our platform. Do not miss out.
				</p>
			</div>
			<button className="py-[16px] px-5 uppercase w-[300px]  rounded-md   text-white font-bold  bg-[#EB3449]  duration-500 hover:bg-[#de2439]">
				get started now
			</button>
		</div>
	);
};

export default Start;
