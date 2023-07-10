import React from "react";

const Footer = () => {
	return (
		<main data-aos="fade-up" className="bg-[#292D36] py-10">
			<div className="container ">
				<div className="md:flex items-center justify-between py-10 pb-20">
					<div>
						<img
							className="pb-6"
							src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647859f16f67fe92cf10d8f6_aurora-logo.png"
							alt=""
						/>
						<p className="text-[#ADADAD] text-lg">
							At Aurora Global, we are partnered with the largest <br />
							advertising networks in the world to ensure our clients have{" "}
							<br /> an unravalled advertising experience.
						</p>
					</div>
					<div className="text-[#ADADAD] text-lg">
						<p className="mb-[20px]">Terms & Conditions</p>
						<p className="mb-[20px]">Privacy Policy</p>
						<p>Cookies Policy</p>
					</div>
				</div>
				<hr className="container py-3 border-[#A5A5A5] border-1" />
				<div className="md:flex  items-center justify-between ">
					<div className="flex mb-10 gap-5">
						<img
							className="w-[50px]"
							src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647c695520dd96af7cc7715f_icon-social-media-03-growth-template.svg"
							alt=""
						/>
						<img
							className="w-[50px]"
							src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647859f16f67fe92cf10d8f7_linked-in.png"
							alt=""
						/>
					</div>
					<div>
						<p className="text-[#ADADAD] pt-4">
							Copyright © Aurora Global Limited. All Rights Reserved.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Footer;
