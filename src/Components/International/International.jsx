import React from "react";

const International = () => {
	return (
		<main data-aos="fade-up" className="max-w-[1000px] mx-auto px-3">
			<div className="my-20">
				<h2 className="mb-4 text-5xl font-bold text-center">
					We’re International
				</h2>
				<p className="text-center text-[#575757] text-xl font-semibold">
					Our business is backed by leveraged connections with a variety of
					people and platforms. To ensure <br /> the maximum opportunities for
					our clients, our presence needs to be felt worldwide.
				</p>
				<div className="grid md:grid-cols-2 my-14">
					<div className="flex shadow-xl p-3 bg-white items-center gap-6 mb-14">
						<img
							className="w-[70px]"
							src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/64814d5ab30ca30eee1f3d7d_flag-uk.png"
							alt=""
						/>
						<div>
							<h2 className="text-[#1f2559] text-xl font-bold mb-3">
								United Kingdom
							</h2>
							<p className="text-[#898989]">
								Merchant House, 30 Cloth Market,
								<br />
								Newcastle upon Tyne, NE1 1EE, United Kingdom
							</p>
						</div>
					</div>
					<div className="flex  shadow-xl p-3 bg-white  items-center gap-6 mb-14">
						<img
							className="w-[70px]"
							src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/64814d5a7332de3fb9045a24_flag-bulgaria.png"
							alt=""
						/>
						<div>
							<h2 className="text-[#1f2559] text-xl font-bold mb-3">
								Bulgaria
							</h2>
							<p className="text-[#898989]">
								Floor 1,109-111 Pernik Street,
								<br />
								Sofia, 1309, Bulgaria
							</p>
						</div>
					</div>
					<div className="flex  shadow-xl p-3 bg-white items-center gap-6 mb-14">
						<img
							className="w-[70px]"
							src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/64814d5a1e583cd05df53844_flag-serbia.png"
							alt=""
						/>
						<div>
							<h2 className="text-[#1f2559] text-xl font-bold mb-3">Serbia</h2>
							<p className="text-[#898989]">
								GTC 19 Avenue, 38-40 Vladimira Popovica Street,
								<br />
								Belgrade, 11070, Serbia
							</p>
						</div>
					</div>
					<div className="flex  shadow-xl p-3 bg-white items-center gap-6 mb-14">
						<img
							className="w-[70px]"
							src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/64814d5a60ae807f1dfd48a4_flag-cambodia.png"
							alt=""
						/>
						<div>
							<h2 className="text-[#1f2559] text-xl font-bold mb-3">
								Cambodia
							</h2>
							<p className="text-[#898989]">
								Urban Village Building, Level 12, Unit A1220,Hun Sen <br />{" "}
								Blvd, Phum Praek Tanou, Chak Angre Leu <br />
								Commune, Meanchey District, Phnom Penh, <br /> Cambodia
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default International;
