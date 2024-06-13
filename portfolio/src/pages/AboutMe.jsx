import profilePic from "../assets/Snapchat-421019764.jpg";
function AboutMe (){
    return (

        <div style={{backgroundColor:"#1a1a1a",width:"90%",margin:"0 auto",height:"80%",borderRadius:"10px"}}>
        <h2 style={{color:"white"}}>About Me</h2>
        <div>  
        <img style={{width: "18em"}} src={profilePic} alt="profile picture" />   {/* pfp above */}
        
        <p style={{color:"white"}}>Iam a programmer from Utah. Iam just starting my Programming career and am glad you've decided to checkout my portfolio. 
            Feel free to look around and check out my projects. Iam always looking for new projects to work on and new people to work with.
        </p>{/*main paragraph for about me  */}
        </div>
        </div>
    );
}
export default AboutMe;