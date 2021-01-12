import React, { Component } from 'react';
import git from '../assets/git_certification.jpg'
import react from '../assets/react_certification.jpg'
import { Redirect } from 'react-router-dom';


class Certification extends Component {
    display=(path)=>{
        console.log("hi");
        window.open(path)
              }
              componentDidMount() {
                document.body.style.backgroundColor = "black";
            }
    render() { 
        return (
            <React.Fragment >
            {/* <div className="cols" style={{backgroundColor:"#F0FFFF"}}> */}
            
            <div className="row" >
            <div className="card" style={{"width":"18rem","margin" :"30px"}}>
            <img className="card-img-top" src={react} alt="React Certification"/>
            <div className="card-body">
                <h5 className="card-title">React Certification</h5>
                <p className="card-text">React Certification from Code with Mosh E-learning website</p>
                <button onClick={() =>this.display('https://github.com/Sreeja-coder/Certification/blob/main/certificate-of-completion-for-mastering-react.pdf')} className="btn btn-primary" >View</button>
            </div>
            </div>

            <div className="card" style={{"width":"18rem","margin" :"30px"}}>
            <img className="card-img-top" src={git} alt="Git Certification"/>
            <div className="card-body">
                <h5 className="card-title">Git Cetification</h5>
                <p className="card-text">Git Certification from Code with Mosh E-learning website.</p>
                <button onClick={() =>this.display('https://github.com/Sreeja-coder/Certification/blob/main/certificate-of-completion-for-the-ultimate-git-course.pdf')} className="btn btn-primary" >View</button>
            </div>
            </div>
            </div>
            {/* </div> */}
            </React.Fragment>

         );
    }
}
 
export default Certification;