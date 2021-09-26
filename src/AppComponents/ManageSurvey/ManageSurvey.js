import React, { Component } from 'react'
import './ManageSurvey.css'
import { Link } from 'react-router-dom'
import Loader from "react-loader-spinner";
import api from '../../APIs/360SurveyApi'

export default class ManageSurvey extends Component {
    constructor(props){
        super(props)
        this.createSurvey = this.createSurvey.bind(this)
        
        this.state = {
            counter:0,
            progressPercent:0,
            loaderTypeCount:0,
            btnDisable:'',
            tableContent:[]
        }

    }

    componentDidMount(){
      this.getSurveyData = this.getSurveyData.bind(this)
      this.getSurveyData()
    }
    
    createSurvey(){
        api.get('createSurvey').then((res)=>{
          console.log(res)
          this.setState({tableContent:res.data,counter:1})
        })
    }

    getSurveyData(){
      api.get('getSurveyData').then((res)=>{
        if (res.data.length>1) {
          this.setState(
            {
              tableContent:res.data,              
            }
            )
        }
        
      })
    }
    


    render() {
        return (
          <div className="container form-container">
            <div className="alert alert-primary" role="alert">
              Upon clicking on below button a distinct survey link will be
              automatically generated for each candidates.
            </div>
            <div className="col-md-12 text-center gradient-buttons">
              {/* <button type="button" className="btn btn-primary">
                <i className='fas fa-cogs px-3'></i>
                Start Survey Engine
              </button> */}
              {this.state.counter > 0 ? 
                <button className="dnldButton">
                <i className="fa fa-download" aria-hidden="true"></i> Export in Excel
              </button>
               : 
                
                <button
                className="button-42"
                onClick={() => {
                  this.createSurvey();
                }}
                disabled={this.state.btnDisable}
              >
                <i className="fas fa-cogs"></i> Start Survey Engine
              </button>
              }
            </div>
            {/* {this.state.counter > 0 ? <this.progressBar /> : ""} */}

            <table className="table my-3">
              <thead>
                <tr>
                  <th scope="col" width="5%">
                    #
                  </th>
                  <th scope="col" width="30%">
                    Candidate's Name
                  </th>
                  <th scope="col" width="15%">
                    Job Role
                  </th>
                  <th scope="col" width="25%">
                    Responses
                  </th>
                  <th scope="col" width="25%">
                    Survey Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {this.state.tableContent.length === 0 ? (
                  <tr>
                  <th scope="row" colSpan="5" className="text-center" >{'No-Data'}</th>    
                </tr> 
                 ) :
                 this.state.tableContent.map((e,i)=>
                  <tr key={i}>
                    <th scope="row">{i+1}</th>
                    <td>{e.cand_name}</td>
                    <td>{e.job_role}</td>
                    <td className='text-center'>{e.responses}</td>
                    <td>
                      <Link target={"_blank"}
                      to={"/collectSurvey?survey_id="+e.survey_link}
                      >
                        https://360survey.com/{e.survey_link}
                      </Link>
                    </td>
                  </tr>
                 )
                   
                   }
              </tbody>
            </table>
          </div>
        );
    }
}




// progressBar(){ 
//   let loaderType = [
//     "Audio",
//     "Ball-Triangle",
//     "Bars",
//     "Circles",
//     "Grid",
//     "Hearts",
//     "Oval",
//     "Puff",
//     "Rings",
//     "TailSpin",
//     "ThreeDots",
//   ];
//   return(
//       <div className='loader'>
//       <Loader
//       type={loaderType[2]}
//       // visible='true'
//       color="#0d6efd"
//       height={100}
//       width={100}
//       timeout={3000} //3 secs
//     />
//       </div>
//   )
      
// }