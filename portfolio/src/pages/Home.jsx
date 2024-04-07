import { Link } from "react-router-dom";
import Projects from "../components/Projects";
import NavBar from "../components/Nav";
import Project from "../components/Projects";
// import Password from "../assets/password-gen.png";
// import Logo from "../assets/logo_maker.png";
// import Emp from "../assets/emp_tracker.png";
// import Time from "../assets/time_challange.png";
import Fine from "../assets/fine-tune-your-day.png";
// import Book from "../assets/book-nook.png";

function Home() {
    const project = [
        {
            name: "Password Generator",
            description: "You can use this app to generate a password",
            Link: "https://github.com/cosmonaut1917/password-gen",
            image: Fine,
        },
        {
            name: "logo Maker",
            description: "You can use this app to generate a logo",
            Link: "https://github.com/cosmonaut1917/logo_maker",
            image: Fine,
        },
        {
            name: "employee tracker",
            description: "You can use this app to track employees",
            Link: "https://github.com/cosmonaut1917/emp_tracker",
            image: Fine,

        },
        {
            name: "java script time challange",
            description: "You can use this app to give yourself a timed test for javascript",
            Link: "https://github.com/cosmonaut1917/time_challange",
            image: Fine,

        },
        {
            name: "fine tune your day",
            description: "This app can be used to help set time for your day using music I created this app with a team of developers. I was responsible for the weather app implimentation.",
            Link: "https://camillebagnani.github.io/fine-tune-your-day/",
            image: Fine,
        },
        {
            name: "Book nook",
            description:"This app is a social media app for book lovers I created with a team of developers. I was responsible for the handlebars implimentation",
            Link: "https://book-nook-2024-1c3caea5765b.herokuapp.com/login",
            image: Fine,
        }
    ];
    return (
        <div style={{ backgroundColor: "#1a1a1a", width: "80%", margin: "0 auto", height: "80%", borderRadius: "10px", overflow:"scroll",   }}>
            <h2 style={{ color: "white" }}>Welcome to my portfolio</h2>
            <div id="box" style={{display: 'flex',flexWrap: 'wrap', width: '80%', justifyContent:"space-around", margin: "0 auto" }}>
            {project.map((project, index) => {
                return <Projects key={index} project={project} />
                
            })} </div>
        </div>
    );
}
export default Home;