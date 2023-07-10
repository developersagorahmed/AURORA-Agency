import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Showcase from "./Components/Showcase/Showcase";
import Hero from "./Components/Showcase/Hero/Hero";
import Scaling from "./Components/Scaling/Scaling";
import Unmissable from "./Components/Unmissable/Unmissable";
import Start from "./Components/Start/Start";
import Boost from "./Components/Boost/Boost";
import OurClient from "./Components/OurClient/OurClient";
import GetStarte from "./Components/GetStarte/GetStarte";
import Footer from "./Components/Footer/Footer";
import Simple from "./Components/Simple/Simple";
import FAQ from "./Components/FAQ/FAQ";
import International from "./Components/International/International";
import "aos/dist/aos.css";
import Aos from "aos";

function App() {
	useEffect(() => {
		Aos.init({
			duration: 400,
		});
	}, []);
	return (
		<>
			<div data-aos="fade-up">
				<div data-aos="fade-up" className="fixed bottom-3 right-5 ">
					<img
						className="w-14"
						src="https://assets.website-files.com/647859f16f67fe92cf10d8c2/647c2ebdebf1c6171b0c21d3_icon-whatsapp.svg"
						alt=""
					/>
				</div>
				<div className=" bg-[#f9f9f8]">
					<div
						className=" border-b-2 border-red-700"
						style={{
							backgroundImage: `url("https://assets.website-files.com/647859f16f67fe92cf10d8c2/647859f16f67fe92cf10d8cf_background-home-header.jpg")`,
							backgroundSize: "cover",
						}}
					>
						<Showcase></Showcase>
						<Hero></Hero>
					</div>
					<Scaling></Scaling>
					<Unmissable></Unmissable>
				</div>
				<Start></Start>
				<Boost></Boost>
				<OurClient></OurClient>
				<Simple></Simple>
				<FAQ></FAQ>
				<International></International>
				<GetStarte></GetStarte>
				<Footer></Footer>
			</div>
		</>
	);
}

export default App;
