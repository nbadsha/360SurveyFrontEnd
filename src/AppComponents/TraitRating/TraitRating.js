import React from 'react'
import './TraitRatingStyle.css'

export const TraitRating = (props) => {
    let traitNameStyle={
        'textAlign': 'justify',
        'textJustify': 'inter-word'
      }
    return (
        <>
          <div className="card" >
          <div className="card-body ">
            <h5 className="card-title"> <strong>{props.traitData.Traits}</strong> </h5>            
            <p className="card-text align-items-center d-flex" style={traitNameStyle}>
            {props.traitData.Definition}
            </p>
            <div className="box">    
                <div className="rating">
                <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate10"}/><label htmlFor={props.traitData.Traits+"rate10"}>10</label>
                <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate9"}/><label htmlFor={props.traitData.Traits+"rate9"}>9</label>
                <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate8"}/><label htmlFor={props.traitData.Traits+"rate8"}>8</label>
                <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate7"}/><label htmlFor={props.traitData.Traits+"rate7"}>7</label>
                <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate6"}/><label htmlFor={props.traitData.Traits+"rate6"}>6</label>
                <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate5"}/><label htmlFor={props.traitData.Traits+"rate5"}>5</label>
                <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate4"}/><label htmlFor={props.traitData.Traits+"rate4"}>4</label>
                <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate3"}/><label htmlFor={props.traitData.Traits+"rate3"}>3</label>
                <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate2"}/><label htmlFor={props.traitData.Traits+"rate2"}>2</label>
                <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate1"}/><label htmlFor={props.traitData.Traits+"rate1"}>1</label>
                </div>
            </div>
          </div>
          
        </div>
        </>
    )
}
