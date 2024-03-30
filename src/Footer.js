import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div id="footer_wrapper">
                <div id="fname">INDRAJEET YADAV</div>
                <div id="quick_link">
                    <div id="fquicklink">Quick link</div>
                    <div id="fproject1">Project - 1</div>
                    <div id="fproject1">Project - 2</div>
                    <div id="fproject1">Project - 3</div>
                    <div id="fproject1">Project - 4</div>
                </div>
                <div id="fcontact">
                    <div id="fcontact_link">Contact Us</div><br />
                    <label><FaInstagramSquare /></label>
                    <label><IoLogoWhatsapp /></label>
                    <label><FaFacebook /></label><br /><br />
                    <label><FaTwitterSquare /></label>
                    <label><FaLinkedin /></label>
                </div>

            </div>
        </>
    );
}
export default Footer;