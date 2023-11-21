import React ,{useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [red, setRed]=useState("secondary")

	const [yellow, setYellow]=useState("secondary")

	const [green, setGreen]=useState("secondary")

	function rojo(){

		setRed("danger")

		setYellow("secondary")

		setGreen("secondary")

	}

	function amarillo(){


		setYellow("warning")

		setRed("secondary")

		setGreen("secondary")
	}

	function verde(){

		setGreen("success")
		
		setYellow("secondary")

		setRed("secondary")
	}

	return (
		<div className="text-center container border" style={{width:"120px", marginTop:"20px"}}>
			<div className={"bg-"+red+" border rounded-circle"} onClick={rojo} style={{height:"100px", width:"100px"}}></div>
			<div className={"bg-"+yellow+" border rounded-circle"} onClick={amarillo} style={{height:"100px", width:"100px"}}></div>
			<div className={"bg-"+green+" border rounded-circle"} onClick={verde} style={{height:"100px", width:"100px"}}></div>
		</div>
	);
};

export default Home;
