import { Link } from "react-router-dom";
function Projects () {
return (
    <div>
        <h2 style={{ color: "white" }}>Projects</h2>
        <ul style={{ color: "white" }}><Link to="https://github.com/cosmonaut1917/password-gen">A password Generator</Link></ul>
            <ul style={{ color: "white" }}><Link to="https://cosmonaut1917.github.io/time_challange/">A time challange</Link></ul>
            <ul style={{ color: "white" }}><Link to="https://github.com/cosmonaut1917/emp_tracker">An employee tracker using backend</Link></ul>
            <ul style={{ color: "white" }}><Link to="https://book-nook-2024-1c3caea5765b.herokuapp.com/login">A mock social media book app that I helped on</Link></ul>
            <ul style={{ color: "white" }}><Link to="https://camillebagnani.github.io/fine-tune-your-day/Links to an external site.">A day planner using music to plan your day</Link></ul>
            </div>
)}





export default Projects;