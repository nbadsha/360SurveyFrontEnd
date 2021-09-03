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

  constructor() {
    super();

    this.state = {};
    this.traitNameStyle={
      'textAlign': 'justify',
      'textJustify': 'inter-word'
    }
    this.onRadioChange = this.onRadioChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onRadioChange = (e) => {
    this.setState({
      traitName: e.target.name,
      rating: e.target.value
    });
    console.log(this.state)
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }
      
  render() {
    return (
      <>
        <div className="card mb-3">
          <div className="card-body ">
            <h5 className="card-title">
              {" "}
              <strong>{this.props.traitData.Traits}</strong>
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
                  name={this.props.traitData.Traits + "-rating"}
                  id={this.props.traitData.Traits + "rate10"}
                  
                />
                <label htmlFor={this.props.traitData.Traits + "rate10"}>
                  10
                </label>
                <input
                  type="radio"
                  name={this.props.traitData.Traits + "-rating"}
                  id={this.props.traitData.Traits + "rate9"}
                  
                />
                <label htmlFor={this.props.traitData.Traits + "rate9"}>9</label>
                <input
                  type="radio"
                  name={this.props.traitData.Traits + "-rating"}
                  id={this.props.traitData.Traits + "rate8"}
                  
                />
                <label htmlFor={this.props.traitData.Traits + "rate8"}>8</label>
                <input
                  type="radio"
                  name={this.props.traitData.Traits + "-rating"}
                  id={this.props.traitData.Traits + "rate7"}
                  
                />
                <label htmlFor={this.props.traitData.Traits + "rate7"}>7</label>
                <input
                  type="radio"
                  name={this.props.traitData.Traits + "-rating"}
                  id={this.props.traitData.Traits + "rate6"}
                  
                />
                <label htmlFor={this.props.traitData.Traits + "rate6"}>6</label>
                <input
                  type="radio"
                  name={this.props.traitData.Traits + "-rating"}
                  id={this.props.traitData.Traits + "rate5"}
                  
                />
                <label htmlFor={this.props.traitData.Traits + "rate5"}>5</label>
                <input
                  type="radio"
                  name={this.props.traitData.Traits + "-rating"}
                  id={this.props.traitData.Traits + "rate4"}
                  
                  
                />
                <label htmlFor={this.props.traitData.Traits + "rate4"}>4</label>
                <input
                  type="radio"
                  name={this.props.traitData.Traits + "-rating"}
                  id={this.props.traitData.Traits + "rate3"}                  
                  
                />
                <label htmlFor={this.props.traitData.Traits + "rate3"}>3</label>
                <input
                  type="radio"
                  name={this.props.traitData.Traits + "-rating"}
                  id={this.props.traitData.Traits + "rate2"}
                  
                />
                <label htmlFor={this.props.traitData.Traits + "rate2"}>2</label>
                <input
                  type="radio"
                  name={this.props.traitData.Traits + "-rating"}
                  id={this.props.traitData.Traits + "rate1"}
                  
                />
                <label htmlFor={this.props.traitData.Traits + "rate1"}>1</label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TraitRating;


