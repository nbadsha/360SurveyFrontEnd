import React,{useState,useEffect, Component} from 'react'
import  TraitRating  from '../TraitRating/TraitRating'
import './SurveyComponent.css'
import Swal from 'sweetalert2'
import api from '../../APIs/360SurveyApi'



export default class SurveyComponent extends Component {

  constructor(props){
    super(props)
    this.continue = this.continue.bind(this)
    this.inputChange = this.inputChange.bind(this)
    this.getCandiDate = this.getCandiDate.bind(this)
    this.addRatingsData = this.addRatingsData.bind(this)
    this.submitSurvey = this.submitSurvey.bind(this)

    
    this.state = {
                  step:0,
                  isCompleted:false,
                  res_name:"",
                  res_emp_id:"",
                  res_dept:"",
                  res_relation:"",
                  surveyRatings:[],
                  traitDetails:[],
                  candidate:{},
                  respondent:{}
                } 
                  
                
    }
  
  componentDidMount(){
    this.loadSurveyTraits = this.loadSurveyTraits.bind(this)    
    this.getCandiDate()
  }

  continue(){
    let respondent = {
      emp_id:this.state.res_emp_id,
      emp_name:this.state.res_name,
      department:this.state.res_dept,      
    }
    console.log(respondent)
    api.post('findOrCreateRespondent',{
      headers: {
        'Content-Type': 'application/json'
      },
      data : respondent
    }).then((res)=>{
      console.log(res)
      this.setState({respondent:res.data[0]})
    })

    api.get('getAllTraits').then((res)=>{      
      this.setState({traitDetails:res.data})
    })
    this.setState({step:1})
  }

  getCandiDate(){
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const survey_link = params.get('survey_id');
    api.get('getCandidateBySurveyLink',{params:{survey_link:survey_link}})
    .then((res)=>{
      console.log(res.data[0])
      this.setState({candidate:res.data[0]})      
    })
    
  }
  
  addRatingsData(ratingData){    
    this.setState({surveyRatings:[...this.state.surveyRatings,ratingData]})
    console.log(this.state.surveyRatings)
  }
  



  loadSurveyTraits(){
    // console.log('load',this.state.respondent)
    return( this.state.traitDetails.map((trait) => {
      return (
        <TraitRating
          traitData={trait}
          key={trait.id}            
          candidateId = {this.state.candidate.cand_id}
          addRatingsData={this.addRatingsData}
        />
      );
    }))
  }

  inputChange = input => e => {
    // console.log(e,[input],e.target.value)
    this.setState({
        [input]: e.target.value
    });
};

submitSurvey(){
  console.log(this.state.candidate)
  console.log(this.state.respondent)
  console.log(this.state.surveyRatings)
  console.log(this.state.res_relation)

  api.post('submitSurvey',{
    headers: {
      'Content-Type': 'application/json'
    },
    data : {
      candidate:this.state.candidate,
      respondent:this.state.respondent,
      surveyRatings:this.state.surveyRatings,
      rel_to_cand: this.state.res_relation
    }
  })
  this.setState({isCompleted:true})
}


  render() {
    let formStyle = {
      width:"55%",
      padding:"50px"
  } 
  let cand = this.state.candidate
  
        if (!this.state.isCompleted) {
          return (
            <div className="container form form-container" style={formStyle}>
            <div className="alert alert-primary trait-border-gradient" role="alert">
              Collecting... survey data for <strong>{cand.cand_name}</strong>.
            </div>
            <h3>Respondent's Form</h3>
            <hr />
            <div className="mb-3">
              <label htmlFor="empName" className="form-label">
                Respondent's Name<span className="text text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control trait-border-gradient"
                id="empName"
                placeholder="Your name goes here..."
                onChange={this.inputChange("res_name")}
                value = {this.state.res_name}
              />
            </div>
      
            <div className="mb-3">
              <label htmlFor="empID" className="form-label">
                Respondent's Employee ID
                <span className="text text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control trait-border-gradient"
                id="empID"
                placeholder="Type Employee ID"
                onChange={this.inputChange("res_emp_id")}
                value = {this.state.res_emp_id}
              />
            </div>
      
            <div className="mb-3">
              <label htmlFor="dept" className="form-label">
                Department<span className="text text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control trait-border-gradient"
                id="dept"
                placeholder="Type your department"
                onChange={this.inputChange("res_dept")}
                value = {this.state.res_dept}
              />
            </div>
      
            <div className="mb-3">
              <label htmlFor="dept" className="form-label">
                Relation with <strong className='text text-success'>{cand.cand_name}</strong><span className="text text-danger">*</span>
              </label>            
              <select className="form-control trait-border-gradient" onChange={this.inputChange("res_relation")} value={this.state.res_relation}>
                <option >Select...</option>
                <option>Senior Engagement Manager</option>
                <option>Senior Manager</option>
                <option>Manager</option>              
                <option>Colleague</option>             
                <option>Self</option>             
              </select>              
            </div>
            {
              this.state.step===0?
              <div className="text-right my-3">
              <button className="btn btn-primary trait-border-gradient" onClick={this.continue} >Continue</button>
          </div>:
          <>
          <div className="alert alert-primary trait-border-gradient" role="alert">
          <strong>{cand.cand_name}</strong> is working as {cand.job_role} in {cand.company_name}. Please Spare sometimes to rate on this traits.
          </div>
          <this.loadSurveyTraits/>
          <button className="btn btn-primary text-right" onClick={this.submitSurvey}>Submit</button>
          </>
            }
  
          </div>
          )
        }
        else{
          return(
            Swal.fire(
              'Good job!',
              'Your ratings will really help us to improve employee performance!',
              'success'
            )
          )
        }
    
        
        
    

  }
}


