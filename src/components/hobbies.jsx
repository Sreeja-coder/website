import React, { Component } from 'react';

import one from '../assets/1.jpg';
import two from '../assets/2.JPG';
import three from '../assets/3.JPG';
import four from '../assets/4.jpg';
import seven from '../assets/7.JPG';
import eight from '../assets/8.JPG';
import nine from '../assets/9.JPG';
import {Carousel} from 'react-bootstrap';
import red from '../assets/red.jpg';
import mani from '../assets/mani.jpg';
import tall_tales from '../assets/tall_tales1.jpg';
import ras from '../assets/rasgullas.jpg';

class Hobbies extends Component {
  state = {  }
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
  }

   handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
   };
  
   componentDidMount() {
    window.addEventListener("resize", this.handleResize);
   }

    styles={
        carousel:{
            height: "80%",
        width:"100%",
        // marginLeft:"200px",
        // marginTop:"200px"
        margin:"100px"
        },
    img:{
        height:"800px",
        width:"500px"
    },
    r1:{
      width:"15rem",
      margin :"20px",
      marginTop:"75px"
    },
    r2:{
      width:"15rem",
      margin :"20px",
      marginTop:"20px"
    }
    }
    render() { 
        return (
        <div className="row">
            
            <div className="col-4">
            <div className="row overflow-auto">
            <h5 style={{color:"white",fontFamily: "Papyrus",marginLeft:"400px",marginTop:"40px",fontSize:"30px"}}>Blogging</h5>
            <div className="card" style={this.styles.r1}>
            <img className="card-img-top" src={red} alt="Poem"/>
            <div className="card-body">
                <h5 className="card-title">I am the Red in your BLOOD</h5>
                <p className="card-text">Lights dim and those demons enter<br/>
                Peel off every memory as they venture<br/>
               </p>
                <button onClick={() =>this.display('http://www.sreeja-pillai.com/i-am-the-red-in-your-blood/')} className="btn btn-primary" >View</button>
            </div>
            </div>

            <div className="card" style={this.styles.r1}>
            <img className="card-img-top" src={mani} alt="Article"/>
            <div className="card-body">
                <h5 className="card-title">Manifestation of our Minds</h5>
                <p className="card-text">They exist; they can be felt, heard at times. They walk around trying to convey their emotions..
               </p>
                <button onClick={() =>this.display('http://www.sreeja-pillai.com/manifestation-minds/')} className="btn btn-primary" >View</button>
            </div>
            </div>

            <div className="card" style={this.styles.r2}>
            <img className="card-img-top" src={tall_tales} alt="Article"/>
            <div className="card-body">
                <h5 className="card-title">Manifestation of our Minds</h5>
                <p className="card-text">Born with a twinkle in the eyes<br/>
                All the hope and aspirations arise<br/>
               </p>
                <button onClick={() =>this.display('http://www.sreeja-pillai.com/tall-tales/')} className="btn btn-primary" >View</button>
            </div>
            </div>

            
            <div className="card" style={this.styles.r2}>
            <img className="card-img-top" src={ras} alt="Article"/>
            <div className="card-body">
                <h5 className="card-title">The open Jar of Rasgullas</h5>
                <p className="card-text">People who know me personally know I love rasgullas. I can and have finished a jar of  in just a few hours in the past.But back then I was unmindful...
               </p>
                <button onClick={() =>this.display('http://www.sreeja-pillai.com/the-open-jar-of-rasgullas/')} className="btn btn-primary" >View</button>
            </div>
            </div>
            </div>
    
</div>
<div className="col-1"></div>
<div className="col-5">
<h5 style={{color:"white",fontFamily: "Papyrus",marginLeft:"400px",marginTop:"40px",fontSize:"30px"}}>Photography</h5>
    <Carousel style={this.styles.carousel}>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={eight}
      alt="First slide"
      style={this.styles.img}
    />
    <Carousel.Caption>
      <h3>Midst</h3>
      <p>In the Midst of a crowd,listen to your soul. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={two}
      alt="Third slide"
      style={this.styles.img}
    />

    <Carousel.Caption>
      <h3>Obstacles</h3>
      <p>They make your life worth narrating.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={four}
      alt="Third slide"
      style={this.styles.img}
    />

    <Carousel.Caption>
      <h3>Light</h3>
      <p>It's within you.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={three}
      alt="Fourth slide"
      style={this.styles.img}
    />
    <Carousel.Caption>
      <h3>Kaleidoscope </h3>
      <p>Life in one word.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={seven}
      alt="Fourth slide"
      style={this.styles.img}
    />
    <Carousel.Caption>
      <h3>Kairos</h3>
      <p>Stuck in the moment.Captured by Time</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={one}
      alt="Fourth slide"
      style={this.styles.img}
    />
    <Carousel.Caption>
      <h3>Kairos</h3>
      <p>Stuck in the moment.Captured by Time</p>
    </Carousel.Caption>
    <Carousel.Item >
    <img
      className="d-block w-100"
      src={nine}
      alt="Fourth slide"
      style={this.styles.img}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel.Item>
</Carousel>
</div>

</div>



          );
    }
}
 
export default Hobbies;