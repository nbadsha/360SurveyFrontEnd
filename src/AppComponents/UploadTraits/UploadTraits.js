import React, { Component } from 'react'
import * as XLSX from 'xlsx';

export default class UploadTraits extends Component {
    constructor(props){
      super(props)
      this.selectedFile = null
      this.traitsData = null
      this.traitTable = null
      this.readFile = this.readFile.bind(this)
      
      this.state = {
        tableContent: [],
        uploadBtnClick:0
    };

    
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
          if (this.traitsData ===null) {
            this.traitsData=data
            
          }
      };
      reader.readAsBinaryString(f);      
    }
    
    uploadTraits(e){ 
      e.preventDefault()    
      if (this.selectedFile===null){
        alert('Please select file')        
      }
      else{        
        this.setState({
          tableContent: this.traitsData 
        });
      }

    }

    

    render() {
      
        return (
          <div className="container">
            <div className="alert alert-primary" role="alert">
              Please upload an excel file consisting <strong>Traits</strong> and
              Its <strong>Definition</strong>. <br />
              Data Configuaration should be as follows:
                <ol>
                    <li><strong>Trait Name</strong></li>
                    <li><strong>Definition</strong></li>                    
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
                  this.uploadTraits(e)
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
                    Traits
                  </th>
                  <th scope="col" width="70%">
                    Definition
                  </th>
                </tr>
              </thead>
              <tbody>
              {
                this.state.tableContent.length===0?
                <tr>
                <th scope="row" colSpan="3" className="text-center" >{'No-Data'}</th>       
              </tr> :
                this.state.tableContent.map((e)=>
                <tr key={e.__rowNum__}>
                <th scope="row" >{e.__rowNum__}</th>
                <th scope="row">{e.Traits}</th>
                <td className="justify-text">{e.Definition}</td>                  
              </tr> 
                )
              }
              </tbody>
            </table>
          </div>
        );
    }
}
