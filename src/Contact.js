import { useState } from "react";


const Contact = () => {
    const [input, setInput] = useState([])
    const inpuhandle = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setInput(item => ({ ...item, [name]: value }))
    }
    const submithdl=()=>{

    }

    return (
        <>
            <div className="contact_body">
                <div>
                    <h1>Contact us</h1><br/>
                    <input type="text" value={input.name} name="name" placeholder="Enter your Name" onChange={inpuhandle} /><br/><br/>
                     <input type="text" value={input.email} name="email" placeholder="Enter your Email" onChange={inpuhandle} /><br/><br/>
                    <input type="text" value={input.number} name="number" placeholder="Enter your number" onChange={inpuhandle} /><br/><br/>
                    <textarea type="text" value={input.message} name="message" placeholder="Enter your message" onChange={inpuhandle} /><br/><br/>
                    <button onClick={submithdl}>Submit</button>
                </div>
            </div>
        </>
    );
}
export default Contact;