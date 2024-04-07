import profilePic from "../assets/Snapchat-421019764.jpg";
function AboutMe (){
    return (
        <div style={{backgroundColor:"#1a1a1a",width:"90%",margin:"0 auto",height:"80%",borderRadius:"10px"}}>
        <h2 style={{color:"white"}}>About Me</h2>
        <div>
        <img style={{width: "18em"}} src={profilePic} alt="profile picture" />
        <p>Iam a programmer from Utah more will be added at a later date</p>
        </div>
        </div>
    );
}
export default AboutMe;