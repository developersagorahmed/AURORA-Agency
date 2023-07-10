import { useState } from "react";
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

function App() {
	return (
		<>
			<div>
				<div className="container bg-[#f9f9f8]">
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
				{/* <Start></Start> */}
				<Boost></Boost>
				<OurClient></OurClient>
				<GetStarte></GetStarte>
			</div>
		</>
	);
}

export default App;
