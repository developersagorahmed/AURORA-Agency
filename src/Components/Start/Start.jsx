import React from "react";

const Start = () => {
	return (
		<div
			data-aos="fade-up"
			className="mt-10 rounded-xl bg-gradient-to-r mb-20 from-black to-[white] bg-transparent bg-opacity-75   flex justify-between items-center px-10"
			style={{
				height: "205px",
				backgroundImage: `url("https://assets.website-files.com/647859f16f67fe92cf10d8c2/647859f16f67fe92cf10d8fb_image%2034.png")`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
			}}
		>
			<div className="lg:flex justify-center items-center ">
				<div>
					<h1 className="lg:text-4xl text-sm  font-bold text-white text-center lg:text-left">
						Get Started Today -{" "}
						<span className="italic">Scale Without Limits</span>
					</h1>
					<p className="lg:text-lg text-xs text-[#a9a99a] lg:text-left text-center font-semibold">
						It’s time to skyrocket your online presence. Our expert team,
						infrastructure and guidance is waiting for you to get started. Sign
						up today for instant access inside of our platform. Do not miss out.
					</p>
				</div>

				<div>
					<button className="lg:py-[16px] p-4 ml-10 md:pl-0 mt-2 md:mt-0 lg:px-5 uppercase text-sm lg:w-[200px]  rounded-md   text-white font-bold  bg-[#EB3449]  duration-500 hover:bg-[#de2439]">
						get started now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Start;
