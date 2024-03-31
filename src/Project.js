import guru from "./guru.mp4";
import { useState } from "react";


const Project = () => {
    const [vide, setVide] = useState(guru)

    const Sourcecode=()=>{

    }
    const moreproject=()=>{
        
    }
    return (
        <>
            <div className="body">
                <div id="project_show_wrapper">
                    <img src="" alt="" />
                    <video src={vide} alt="#" controls="controlls" />
                </div>
                <div id="project_button">
                    <button> My Project</button>
                    <button>Live Preview</button>
                </div>
                <div id="project_details">
                    <h2>Project Drtails</h2><br/>
                    <h4>Project Type  : E-commerce Projects</h4><br/>
                    <h4>Project Name  :  Styleshop.com</h4><br/>
                    <h4>Technologies used in this Project  : Reactjs, CSS3,JSX</h4>
                    <div id="proj_information">
                        Styleshop represents a comprehensive implementation of a
                        clothing store web application using cutting-edge
                        technologies such as ReactJS, Redux Toolkit, and CSS3.
                        With its extensive feature set, responsive design,
                        and intuitive user interface, Styleshop offers users
                        an engaging and seamless online shopping experience.
                        The project showcases best practices in web development,
                        including modular architecture, state management, and
                        responsive design, making it a valuable resource
                        for both developers and users in the e-commerce domain.
                    </div>
                </div>
                <div id="projectcode_button">
                    <button onClick={Sourcecode}> Source Code</button>
                    <button onClick={moreproject}>More Projects</button>
                </div>
                <div id="Project_list">
                    <h5>Globalmixhub.com</h5>
                    <h5>Apple Clone</h5>
                </div>

            </div >
        </>
    );
}
export default Project;