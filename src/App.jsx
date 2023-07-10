import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Showcase from "./Components/Showcase/Showcase";
import Hero from "./Components/Showcase/Hero/Hero";
import Scaling from "./Components/Scaling/Scaling";
import Unmissable from "./Components/Unmissable/Unmissable";

function App() {
	return (
		<>
			<div className="container">
				<div
					style={{
						backgroundImage: `url("https://assets.website-files.com/647859f16f67fe92cf10d8c2/647859f16f67fe92cf10d8cf_background-home-header.jpg")`,
						backgroundSize: "cover",
					}}
				>
					<Showcase></Showcase>
					<Hero></Hero>
					<Scaling></Scaling>
					<Unmissable></Unmissable>
				</div>
			</div>
		</>
	);
}

export default App;
