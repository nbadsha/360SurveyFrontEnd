import React ,{ Component } from 'react'
import './TraitRatingStyle.css'


// export const TraitRating = (props) => {

      
//      const  onRadioChange = (e) => {
//         this.setState({
//           color: e.target.value
//         });
//       }

//     return (
//         <>
//           <div className="card mb-3" >
//           <div className="card-body ">
//             <h5 className="card-title"> <strong>{props.traitData.Traits}</strong> </h5>            
//             <p className="card-text align-items-center d-flex" style={traitNameStyle}>
//             {props.traitData.Definition}
//             </p>
//             <div className="box">    
//                 <div className="rating">
//                 <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate10"}/><label htmlFor={props.traitData.Traits+"rate10"}>10</label>
//                 <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate9"}/><label htmlFor={props.traitData.Traits+"rate9"}>9</label>
//                 <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate8"}/><label htmlFor={props.traitData.Traits+"rate8"}>8</label>
//                 <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate7"}/><label htmlFor={props.traitData.Traits+"rate7"}>7</label>
//                 <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate6"}/><label htmlFor={props.traitData.Traits+"rate6"}>6</label>
//                 <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate5"}/><label htmlFor={props.traitData.Traits+"rate5"}>5</label>
//                 <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate4"}/><label htmlFor={props.traitData.Traits+"rate4"}>4</label>
//                 <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate3"}/><label htmlFor={props.traitData.Traits+"rate3"}>3</label>
//                 <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate2"}/><label htmlFor={props.traitData.Traits+"rate2"}>2</label>
//                 <input type="radio" name={props.traitData.Traits+"-rating"} id={props.traitData.Traits+"rate1"}/><label htmlFor={props.traitData.Traits+"rate1"}>1</label>
//                 </div>
//             </div>
//           </div>
          
//         </div>
//         </>
//     )
// }




class TraitRating extends Component {

  constructor(props) {
    super();
    this.state = {};
    this.traitNameStyle={
      'textAlign': 'justify',
      'textJustify': 'inter-word'
    }
    this.traitNameLabel = props.traitData.Traits
    this.traitName = this.traitNameLabel.replace(/ /g,'')
    this.props = props
  }
  

  collectRating = (rating,traitName)=>{
    const ratingData = {
      traitName:traitName,
      traitRating:rating
    }    
    this.props.addRatingsData(ratingData)    
  }

      
  render() {
    return (
      <>
        <div className="card mb-3">
          <div className="card-body ">
            <h5 className="card-title">
              {" "}
              <strong>{this.traitNameLabel}</strong>
              {" "}
            </h5>
            <p
              className="card-text align-items-center d-flex"
              style={this.traitNameStyle}
            >
              {this.props.traitData.Definition}
            </p>
            <div className="box">
              <div className="rating">
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate10"}
                  
                />
                <label htmlFor={this.traitName + "rate10"} onClick={ ()=>{this.collectRating(10,this.traitNameLabel)} }>
                  10
                </label>
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate9"}
                  
                />
                <label htmlFor={this.traitName + "rate9"} onClick={ ()=>{this.collectRating(9,this.traitNameLabel)} }>9</label>
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate8"}
                  
                />
                <label htmlFor={this.traitName + "rate8"} onClick={ ()=>{this.collectRating(8,this.traitNameLabel)} }>8</label>
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate7"}
                  
                />
                <label htmlFor={this.traitName + "rate7"} onClick={ ()=>{this.collectRating(7,this.traitNameLabel)} }>7</label>
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate6"}
                  
                />
                <label htmlFor={this.traitName + "rate6"} onClick={ ()=>{this.collectRating(6,this.traitNameLabel)} }>6</label>
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate5"}
                  
                />
                <label htmlFor={this.traitName + "rate5"} onClick={ ()=>{this.collectRating(5,this.traitNameLabel)} }>5</label>
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate4"}                  
                  
                />
                <label htmlFor={this.traitName + "rate4"} onClick={ ()=>{this.collectRating(4,this.traitNameLabel)} }>4</label>
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate3"}                  
                  
                />
                <label htmlFor={this.traitName + "rate3"} onClick={ ()=>{this.collectRating(3,this.traitNameLabel)} }>3</label>
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate2"}
                  
                />
                <label htmlFor={this.traitName + "rate2"} onClick={ ()=>{this.collectRating(2,this.traitNameLabel)} }>2</label>
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate1"}
                  
                />
                <label htmlFor={this.traitName + "rate1"} onClick={ ()=>{this.collectRating(1,this.traitNameLabel)} }>1</label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TraitRating;


