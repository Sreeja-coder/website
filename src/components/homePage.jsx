import React, { Component } from 'react';
import profile from '../assets/pic.png';
import nam from '../assets/namaskar.png';
import q from '../assets/q4.png';
import q2 from '../assets/q3.png'
class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
<div className="row">  
<div className="col-5">
<span ><img src={profile} className=" m-5 "/></span>

<img src={q} style={{marginLeft:"14px"}}/>

</div>
<div className="col-4">
    <h3 style={{textAlign: "center",marginTop:"70px",fontFamily: "Times",color:"white"}}><i> Sreeja Pillai</i> </h3>
    <h5 style={{textAlign: "center",color:"#ffa500",fontFamily:"Courier"}}><img src={nam}/> Thank You for visiting my profile.</h5>
    <p style={{color:"white",fontFamily:"Fira Mono",fontSize:"19px"}}> 
        I was introduced to a calculator during my school days and it amazed me how a tiny box could do those mathematical calculations in seconds. 
        Little did I know my mind was about to be blown by something called "Computers...". In the following years I  enrolled for "Qbasic" in school,which instantly grew on me; and left a lasting impact on me. <br/>
        I followed this instinct and pursued my Bachelors in "Information Technology".<br/>
        I since then have worked as a Database and Peoplesoft Administrator for the past 7 years where I realized and honed  my problem solving and decision-making capabilites. As time passed my love for coding grew as did my passion for learning different programming languages.
        And that instant I decided to pursue my interests and educate myself further. <br/>
        <p style={{color:"#ffdab9"}}>I am currently pursuing my  Master's degree in Computer Science  from University of Utah (SLC). Wheting all my skills to becoming a great Software Developer and Data Scientist.</p>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <p style={{fontSize:"15px"}}><i className="fa fa-envelope-o" aria-hidden="true" style={{margin:"2"}}> sreejap89@gmail.com </i></p> 
        <a style={{fontSize:"15px" }} href="./resume.pdf" download><i className="fa fa-cloud-download" aria-hidden="true" ><span style={{marginLeft:"2px"}}>Resume</span></i></a><br/>
       
        
       
     </p>
     
</div>
<img src={q2} style={{marginTop:"100px"}}/>
</div>  

          );
    }
}
 
export default HomePage;