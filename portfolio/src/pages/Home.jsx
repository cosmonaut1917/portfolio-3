import { Link } from "react-router-dom";
import Projects from "../components/Projects";
import NavBar from "../components/Nav";
import Project from "../components/Projects";
function Home() {
    const project = [
        {
            name: "Password Generator",
            description: "You can use this app to generate a password",
            Link: "https://github.com/cosmonaut1917/password-gen",
            Image: "https://via.placeholder.com/150",
        },
        {
            name: "logo Maker",
            description: "You can use this app to generate a logo",
            Link: "https://github.com/cosmonaut1917/logo_maker",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "employee tracker",
            description: "You can use this app to track employees",
            Link: "https://github.com/cosmonaut1917/emp_tracker",
            image: "https://via.placeholder.com/150",

        },
        {
            name: "java script time challange",
            description: "You can use this app to give yourself a timed test for javascript",
            Link: "https://github.com/cosmonaut1917/time_challange",
            image: "https://via.placeholder.com/150",

        },
        {
            name: "fine tune your day",
            description: "This app can be used to help set time for your day using music I created this app with a team of developers. I was responsible for the weather app implimentation.",
            Link: "https://camillebagnani.github.io/fine-tune-your-day/",
            image: "portfolio/src/assets/fine-tune-your-day.png",
        },
        {
            name: "Book nook",
            description:"This app is a social media app for book lovers I created with a team of developers. I was responsible for the handlebars implimentation",
            Link: "https://book-nook-2024-1c3caea5765b.herokuapp.com/login",
            image: "https://via.placeholder.com/150"
        }
    ];
    return (
        <div style={{ backgroundColor: "#1a1a1a", width: "80%", margin: "0 auto", height: "80%", borderRadius: "10px" }}>
            <h2 style={{ color: "white" }}>Welcome to my portfolio</h2>
            <div id="box" style={{display: 'flex',flexWrap: 'wrap', width: '70%'}}>
            {project.map((project) => {
                return <Projects key={project.index} project={project} />
                
            })} </div>
        </div>
    );
}
export default Home;