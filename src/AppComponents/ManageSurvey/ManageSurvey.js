import React, { Component } from 'react'
import './ManageSurvey.css'
// import { Link } from 'react-router-dom'
// import Loader from "react-loader-spinner";
import api from '../../APIs/360SurveyApi'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

export default class ManageSurvey extends Component {
    constructor(props){
        super(props)
        this.createSurvey = this.createSurvey.bind(this)
        this.onGridReady = this.onGridReady.bind(this)
        this.exportToCSV = this.exportToCSV.bind(this)
        this.state = {
            counter:0,
            progressPercent:0,
            loaderTypeCount:0,
            btnDisable:'',
            tableContent:[],
            createSurveyBtn:false,
            gridAPI:[],
            gridColAPI:[]
        }

    }

    componentDidMount(){
      this.getSurveyData = this.getSurveyData.bind(this)      
      this.getSurveyData()
    }
    
    createSurvey(){
        api.get('createSurvey').then((res)=>{
          console.log(res)
          this.getSurveyData()
        })
    }   
    

    getSurveyData(){
      api.get('getSurveyData').then((res)=>{
        if (res.data.length>1) {
          this.setState(
            {
              tableContent:res.data                     
            }
            )
        }
        else{
          this.setState({createSurveyBtn:true})
        }
        
      })
    }

    onGridReady(params){
      this.setState({gridAPI:params.api, gridColAPI:params.columnApi})
  }

  exportToCSV(){
    if (this.state.tableContent.length>0) {
         this.state.gridAPI.exportDataAsCsv({fileName:'UniqueSurveyLinksForCandidates.csv'});
    }       
}
    


    render() {
        return (
          <div className="container form-container">
            {
              this.state.createSurveyBtn?(
                <div className="alert alert-primary" role="alert">
                Upon clicking on below button a distinct survey link will be
                automatically generated for each candidates.
              </div>
              ):''
            }
            <div className="col-md-12 text-center gradient-buttons">
              {/* <button type="button" className="btn btn-primary">
                <i className='fas fa-cogs px-3'></i>
                Start Survey Engine
              </button> */}
              {/* {this.state.counter > 0 ? 
                <button className="dnldButton">
                <i className="fa fa-download" aria-hidden="true"></i> Export in Excel
              </button>
               : '' 
              } */}
              {this.state.createSurveyBtn ? (
                <button
                  className="button-42"
                  onClick={() => {
                    this.createSurvey();
                  }}
                >
                  <i className="fas fa-cogs"></i> Start Survey Engine
                </button>
              ) : (
                ""
              )}
            </div>
            {/* {this.state.counter > 0 ? <this.progressBar /> : ""} */}
            <div
              className="container ag-theme-alpine my-4"
              style={{ width: "100vh", height: "70vh", paddingBottom: "30px" }}
            >
              <div className="navbar  nvbg">
                <div className="wrapper px-3">
                  {this.state.createSurveyBtn ? (
                    <button
                      className="button-42"
                      onClick={() => {
                        this.createSurvey();
                      }}
                    >
                      <i className="fas fa-cogs"></i> Start Survey Engine
                    </button>
                  ) : (
                    ""
                  )}
                  <button className="btn btn-light mx-2 getReport" onClick={this.exportToCSV}>
                    <i class="fas fa-download"></i> Export to CSV
                  </button>
                </div>
              </div>
              <AgGridReact
                rowData={this.state.tableContent}
                onGridReady={this.onGridReady}
              >
                <AgGridColumn
                  field="survey_id"
                  headerName="#"
                  width="50"
                ></AgGridColumn>

                <AgGridColumn
                  field="cand_name"
                  headerName="Candidate"
                  width="100"
                ></AgGridColumn>

                <AgGridColumn
                  field="job_role"
                  headerName="Job Role"
                  width="100"
                ></AgGridColumn>

                <AgGridColumn
                  field="responses"
                  headerName="Responses"
                  width="110"
                ></AgGridColumn>

                <AgGridColumn
                  field="survey_link"
                  headerName="Survey Link"
                  width="350"
                  cellRenderer={(link)=>{
                    return `<a href="/collectSurvey?survey_id=`+link.value+`" target="_blank">https://360survey.com/`+link.value+`</a>`
                  }}
                ></AgGridColumn>

              </AgGridReact>
            </div>
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



/* <table className="table my-3">
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
            </table> */