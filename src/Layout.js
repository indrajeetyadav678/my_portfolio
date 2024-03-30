import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <div id="nav_wrapper">
                    <div id="navtitle">Portfolio</div>
                <div id="navbar">
                    <Link to="home" id="btn1" >Home</Link>
                    <Link to="about" id="btn1" >About Me</Link>
                    <Link to="skill" id="btn1" >Skills</Link>
                    <Link to="project" id="btn1" >Project</Link>
                    <Link to="contact" id="btn1" >Contact</Link>
                </div>
            </div>
            <Outlet />
            <Footer />

        </>
    );
}
export default Layout;