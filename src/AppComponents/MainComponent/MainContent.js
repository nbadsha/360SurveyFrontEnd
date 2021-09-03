import React from 'react'
import  TraitRating  from '../TraitRating/TraitRating'
import TraitData from '../TraitRating/TraitData.json'
import './MainContent.css'

export const MainContent = (props) => {
    let formStyle = {
        width:"55%",
        padding:"50px"
    }
    // console.log(screen.width)
    
    
    return (
      <form action="POST">
      <div className="container form" style={formStyle}>
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
            placeholder="Type your department"
          />
        </div>

        
        {
          TraitData.map((trait)=>{return(            
            <TraitRating traitData={trait} key={trait.ID} collectTraitRating={props.collectTraitRating}/>
          )})
        }
        

        <button className="btn btn-primary m-3">Next</button>
        
      </div>
      </form>
    );
}
