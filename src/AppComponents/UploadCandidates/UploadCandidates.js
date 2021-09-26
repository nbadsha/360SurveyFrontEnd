import React, { Component } from 'react'
import * as XLSX from 'xlsx';
import api from '../../APIs/360SurveyApi'


export default class UploadCandidates extends Component {
    constructor(props){
        super(props)
        this.selectedFile = null
        this.candsData = null        
        this.readFile = this.readFile.bind(this)
        
        this.state = {
          tableContent: [],
          uploadBtnClick:0
      };  
      }

      componentDidMount(){
        this.getAllCandidates = this.getAllCandidates.bind(this)
        this.getAllCandidates()
      }
      readFile(evt){
        this.selectedFile = evt.target.files[0]['name']
        
        let f
        f = evt.target.files[0]
        const reader = new FileReader();
        reader.onload = (evt) => { // evt = on_file_select event
            /* Parse data */
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, {type:'binary'});
            /* Get first worksheet */          
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_json(ws);
            /* Update state */
            if (this.candsData ===null) {
              this.candsData=data
              
            }
        };
        reader.readAsBinaryString(f);      
      }
      
      uploadCandidates(e){ 
        e.preventDefault()    
        if (this.selectedFile===null){
          alert('Please select file')        
        }
        else{
          api.post('createCandidates',{
            headers: { 
              'Content-Type': 'application/json'
            },
            data : this.candsData
          }).then((res)=>{
            console.log(res)
          })
          this.setState({
            tableContent: this.candsData 
          });
          console.log(this.candsData)
        }  
      }
      getAllCandidates(){
        api.get('getAllCandidates').then((res)=>{
          console.log(res.data)
          this.setState({
            tableContent: res.data
          });
        })
      }
      
  
      render() {
        
          return (
            <div className="container form-container">
              <div className="alert alert-primary" role="alert">
                Please upload an excel file consisting <strong>Candidates</strong>, for whom you want to perform a 360° Survey.
                Data Configuaration should be as follows:
                <ol>
                    <li><strong>Candidate's Name</strong></li>
                    <li><strong>Job Role</strong></li>
                    <li><strong>Company Name</strong></li>
                    
                </ol>
              </div>
             
              <form className='form-inline'>
              <div className="input-group mb-3">              
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile02"
                  accept=".xlsx"
                  
                  onChange={(e)=>{
                    this.readFile(e)
                  }}
                />
                <button
                  className="input-group-text btn btn-primary"
                  htmlFor="inputGroupFile02"
                  onClick={(e)=>{
                    this.uploadCandidates(e)
                  }}
                >
                  Upload
                </button>
              </div>
              </form>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" width="10%">
                      #
                    </th>
                    <th scope="col" width="30%">
                        Candidate's Name
                    </th>
                    <th scope="col" width="35%">
                        Job Role
                    </th>
                    <th scope="col" width="35%">
                        Company Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                {
                  this.state.tableContent.length===0?
                  <tr>
                  <th scope="row" colSpan="4" className="text-center" >{'No-Data'}</th>       
                </tr> :
                  this.state.tableContent.map((e,i)=>
                  <tr key={i+1}>
                  <th scope="row" >{i+1}</th>
                  <td>{e.cand_name}</td>
                  <td>{e.job_role}</td>
                  <td className='text-center'>{e.company_name}</td>
                </tr> 
                  )
                }
                </tbody>
              </table>
            </div>
          );
      }
}
