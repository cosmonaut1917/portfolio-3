import { Link } from "react-router-dom";
import Projects from "../components/Projects";
import NavBar from "../components/Nav";
function Home() {
    return (
        <div style={{ backgroundColor: "#1a1a1a", width: "90%", margin: "0 auto", height: "80%", borderRadius: "10px" }}>
            <h2 style={{ color: "white" }}>Welcome to my portfolio</h2>
            <Projects  />
           
        </div>
    );
}
export default Home;