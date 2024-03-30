import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";

function App() {
    return (
        <>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skill" element={<Skills />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<Contact />} />
    </Route>
</Routes>
</BrowserRouter>

        </>
    );
}

export default App;