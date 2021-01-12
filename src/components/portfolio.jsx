import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class PortFolio extends Component {
    styles= {
        p:{
            color:"#fffaf0",
            textAlign:"auto",
            fontFamily: " system-ui",
            fontSize:"16px"
        }
    }
    componentDidMount() {
        // document.body.style.backgroundColor = " #666666";
        document.body.style.backgroundColor = " black";
    }
    render() { 
        return ( 
            <div className="overflow-auto">
            <div className="row">
            <div className="col-1"><i className="fa fa-balance-scale fa-4x" style={{color:"yellow",marginTop:"15px",marginLeft:"7px"}}aria-hidden="true"></i></div>
            <div className="col-7">
                <h4 style={{color:"white",marginTop:"10px"}}> The Old Bailey Court Decisions</h4>
                <p style={this.styles.p}>Old Bailey Decisions holds digitized records of the Old Bailey Court Proceedings. Every
                    proceeding deals with criminal court cases from England and Wales with a judgement being
                    passed as “guilty” or “not guilty”.The crux of the project. We are training classifier models on the train data to predict
                    the decision of the court - “guilty” or “not guilty”.<br/>
                    Feature Representation of Data:
                    <ul>
                        <li>BOW – bag of words dataset represents most frequently used words in the trail and its
                            counts. 10000 words have been considered for each trial. </li>
                        <li>Tfidf – Is an improvement over bow representation, where the frequent words are
                        weighted down using the idf. Since bow has a dimension of 10000, Tfidf also has 10000.
                        </li>
                        <li> Glove – This dataset consists of word embeddings weighted by Tfidf.</li>
                        <li>Misc – This dataset has categorically attributes.</li>
                    </ul>

                    Ideas Explored: Data Pre-processing,Cross-Validation,Tuning Hyper-Parameters,Analyzing Over-fitting and Under-fitting,Handling Generalization Errros<br/>
                    Python Packages Used: Neural Nets and Random Forest <br/>
                    Algorithms Used:  Perceptron,ID3,SVM,Logistic Regression, Ensemble. <br/>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Sreeja-coder/Machine-Learning-"> Read more ... </a>
                </p>
            </div>
            </div>
            <div className="row">
            <div className="col-1"><i className="fa fa-question-circle-o fa-4x" aria-hidden="true" style={{color:"yellow",marginTop:"15px",marginLeft:"7px"}}></i></div>
            <div className="col-7">
            <h4 style={{color:"white",marginTop:"14px"}}> Question Maker</h4>
            <p style={this.styles.p}> At any shoppping website,it is the seller's responsibility to provide all the necessary information a customer might be looking for; additionally, the seller might find it difficult to survey the online market for similar products and check all user
            asked questions/suggestions.Hence the project aims at creating a model that generates questions related to any specific product for the seller.<br/>
            Dataset:
            <ul>
                <li> Amazon Product Dataset:contains product meta-data </li>
                <li> Amazon Review/Rating Dataset:contains products reviews/ratings and q/a for each product</li>
            </ul>
            Methodology:
            <ul>
                <li>Pre-processing Data: Converting data into a format analyzable by our IR model, by applying Tokenization,Stemming,Stop-word/Special character/URL removal and POS tagging</li>
                <li> Generating Vector Space Model using TF-IDF </li>
                <li> Applying Cosine Similarity </li>
                <li> Applying probablistic model of BM25</li>
                <li> Evaluation using semantic scores </li>

                </ul>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Sreeja-coder/Information-Retrieval-Project"> Read more ... </a>
            </p>
            </div>
            </div>

            <div className="row">
            <div className="col-1"><i className="fa fa-exchange fa-4x" aria-hidden="true" style={{color:"yellow",marginTop:"15px",marginLeft:"7px"}}></i></div>
            <div className="col-7">
            <h4 style={{color:"white",marginTop:"14px"}}> Coreference Resolution System</h4>  
            <p style={this.styles.p}> The Aim of the project was to find all the references for the initial coreference  cluster.
            Each Document was marked with sentence boundaries such that "Each sentence will be surrounded by the tags {"<S ID=“#”> </S>"} and 
            initial refernce for every coreference cluster {"<COREF ID=“X#”>and</COREF>"} <br/>
            Scoring:
            <ul>
                <li>Recall (R):the number of correct references identified by your system divided by the total numberof references in the answer key.</li>
                <li>Precision (P):the number of correct references identified by your system divided by the totalnumber of references produced by your system.</li>
                <li>F Score:{"2*P*R/(P+R)"}</li>
            </ul>
            Methodology:
            <ul>
             <li>dictionary storing the coref ID and the sentence it belongs to </li>
             <li>dictionary storing each sencte ID and its clean sentence using regex</li>
             <li> Apply POS tag, NER Tags, synonyms for each word </li>
            </ul>
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Sreeja-coder/Natural-Language-Processing/tree/master/Coreference"> Read more ... </a>
            </p>
                
            </div>
            </div>
            <div className="row">
            <div className="col-1"><i className="fa fa-globe fa-4x" aria-hidden="true" style={{color:"yellow",marginTop:"15px",marginLeft:"7px"}}></i></div>
            <div className="col-7">
            <h4 style={{color:"white",marginTop:"14px"}}> Visualizing Global Terrorist Attacks</h4>  
               <p style={this.styles.p}> In the project we give a global picture of the attacks that have happened over a period of
                time. Which makes it easy to compare them and also derive important details of the attacks.
                Since it is available online it can be shared and viewed and discussed in meetings conducted
                across the world. Also our project allows to filter the attacks based on few parameters such as
                weapons used or intensity of the attacks which could help the officials extrapolate the spike in
                sales of weapons in black market etc <br/>
                <a href = "http://eventdata.parusanalytics.com/data.dir/atrocities.html">Dataset</a> <br/>
                <a href="https://sreeja-coder.github.io/DataVizProject-code/"> Deployment </a> <br/>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Sreeja-coder/DataVizProject-code"> Read more ... </a>
                </p> 
                
                <a href=""> </a>
            </div>
            </div>

            <div className="row">
            <div className="col-1"><i className="fa fa-video-camera fa-4x" aria-hidden="true" style={{color:"yellow",marginTop:"15px",marginLeft:"7px"}}></i></div>
            <div className="col-7">
            <h4 style={{color:"white",marginTop:"14px"}}>Movie Rental Portal </h4>
            <p style={this.styles.p}>The aim of the project was to build a web-based movie rental portal with JSX and React Components. Understanding the lifecycle methods of the class and Hooks for functional
            components. Using Lodash for performing certain operations. Implementing React Routers for navigation and re-direction. Font-awesome,Toastify,bootstrap for the good visualization. 
            Used mongo Db along with Node.js for backend. </p>
            <a target="_blank" rel="noopener noreferrer" href='https://github.com/Sreeja-coder/React_Project'> Read more ... </a>

            </div>

            </div>
            </div>




         );
    }
}
 
export default PortFolio;