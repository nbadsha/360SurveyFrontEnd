import React,{useState,useEffect} from 'react'
import  TraitRating  from '../TraitRating/TraitRating'
import TraitData from '../TraitRating/TraitData.json'
import './SurveyComponent.css'

export const SurveyComponent = (props) => {
    let formStyle = {
        width:"55%",
        padding:"50px"
    }
    // console.log(screen.width)    
    
    const addRatingsData=(ratingData)=>{      
      setRatingsData([...ratingsData,ratingData])
      console.log(ratingsData)
      // useEffect(()=>console.log(ratingsData),ratingsData)
    }
    const [ratingsData, setRatingsData] = useState([])
    useEffect(() => {
      localStorage.setItem("ratingsData", JSON.stringify(ratingsData));
      
    }, [ratingsData])
    return (
      <form action="POST">
        
      <div className="container form" style={formStyle}>
      <div className="alert alert-primary" role="alert">
          <strong>Mr. Jhon</strong> is working as a salesman in EXL. Please Spare sometimes to rate him on this traits.
        </div>
        <div className="mb-3">
          <label htmlFor="empName" className="form-label">
            Employee Name<span className="text text-danger">*</span>
          </label>
          <input
            type="text"
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
            <TraitRating traitData={trait} key={trait.ID} collectTraitRating={props.collectTraitRating} addRatingsData={addRatingsData}/>
          )})
        }
        

        <button type="submit" className="btn btn-primary m-3">Submit</button>
        
      </div>
      </form>
    );
}
