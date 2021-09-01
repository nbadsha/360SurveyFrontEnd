import React from 'react'
import './MainContent.css'

export const MainContent = () => {
    let formStyle = {
        width:"50%",
        padding:"50px"
    }

    let cardStyle = {
        width: "18rem"
    }
    return (
      <div className="container" style={formStyle}>
        <div className="mb-3">
          <label htmlhtmlFor="empName" className="form-label">
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
          <label htmlhtmlFor="empID" className="form-label">
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
          <label htmlhtmlFor="dept" className="form-label">
            Department<span className="text text-danger">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="dept"
            placeholder="Type Employee ID"
          />
        </div>

        <div className="card" >
          <div className="card-body ">
            <h5 className="card-title">Ability to learn</h5>            
            <p className="card-text align-items-center d-flex justify-content-center">
            Learning ability is about how you learn, apply and consume knowledge to apply. There’s a whole series of courses on learning to learn, to teach yourself how you learn, how to learn, and why you are not learning something.
            </p>
            <div className="box">    
                <div className="rating">
                <input type="radio" name="rating" id="rate10"/><label htmlFor="rate10">10</label>
                <input type="radio" name="rating" id="rate9"/><label htmlFor="rate9">9</label>
                <input type="radio" name="rating" id="rate8"/><label htmlFor="rate8">8</label>
                <input type="radio" name="rating" id="rate7"/><label htmlFor="rate7">7</label>
                <input type="radio" name="rating" id="rate6"/><label htmlFor="rate6">6</label>
                <input type="radio" name="rating" id="rate5"/><label htmlFor="rate5">5</label>
                <input type="radio" name="rating" id="rate4"/><label htmlFor="rate4">4</label>
                <input type="radio" name="rating" id="rate3"/><label htmlFor="rate3">3</label>
                <input type="radio" name="rating" id="rate2"/><label htmlFor="rate2">2</label>
                <input type="radio" name="rating" id="rate1"/><label htmlFor="rate1">1</label>
                </div>
            </div>
          </div>
        </div>

        <button className="btn btn-primary m-3">Next</button>
      </div>
    );
}
