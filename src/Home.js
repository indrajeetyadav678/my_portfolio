
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";
import myphoto from "./myphoto.jpg";

const Home = () => {  
    const [typeletter, settypeletter] = useState("");

    useEffect(() => {
        settypeletter(<Typewriter
            onInit={(typewriter) => {
                typewriter
                    .typeString("Front End Developer")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Back End Developer")
                    .start()
            }}
        />)
    },[])
    return (
        <>
            <div className="hero_section">
                <div id="hero_div1">
                    <label className="myname">Indrajeet yadav</label>
                    <div className="profasion">I Am &nbsp; {typeletter}</div>
                </div>
                <div id="hero_div2">
                    <img src={myphoto} alt="#" />
                </div>
            </div>
        </>
    );
}
export default Home;