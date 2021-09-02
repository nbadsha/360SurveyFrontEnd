import React from 'react'
import { TraitRating } from '../TraitRating/TraitRating'
import TraitData from '../TraitRating/TraitData.json'

export const MainContent = () => {
    let formStyle = {
        width:"55%",
        padding:"50px"
    }
    console.log(TraitData)
    
    
    return (
      <div className="container" style={formStyle}>
        <div className="mb-3">
          <label htmlFor="empName" className="form-label">
            Name<span className="text text-danger">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="empName"
            placeholder="Your name goes here..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="empID" className="form-label">
            Employee ID<span className="text text-danger">*</span>
          </label>
          <input
            type="number"
            className="form-control"
            id="empID"
            placeholder="Type Employee ID"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dept" className="form-label">
            Department<span className="text text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="dept"
            placeholder="Type Employee ID"
          />
        </div>

        
        {
          TraitData.map((trait)=>{return(            
            <TraitRating traitData={trait}/>
          )})
        }
        

        <button className="btn btn-primary m-3">Next</button>
      </div>
    );
}
