import React ,{ Component } from 'react'
import './TraitRatingStyle.css'


class TraitRating extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.traitNameStyle={
      'textAlign': 'justify',
      'textJustify': 'inter-word'
    }

    this.traitNameLabel = props.traitData.trait_name
    this.traitName = this.traitNameLabel.replace(/ /g,'')
    
  }
  

  collectRating = (rating,traitName)=>{
    const ratingData = {
      traitId:traitName,
      trait_rating:rating,      
      candidateId:this.props.candidateId
    }
    
    this.props.addRatingsData(ratingData) 
  }

      
  render() {

    return (
      <>
        <div className="card mb-3 trait-border-gradient">
          <div className="card-body ">
            <h5 className="card-title">
              {" "}
              <strong>{this.traitNameLabel}</strong>
              <span className="text text-danger"> *</span>
              {" "}
            </h5>
            <p
              className="card-text align-items-center d-flex"
              style={this.traitNameStyle}
            >
              {this.props.traitData.trait_definition}
            </p>
            <div className="box">
              <div className="rating">
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate10"}
                  
                />
                <label htmlFor={this.traitName + "rate10"} onClick={ ()=>{this.collectRating(10,this.props.traitData.id)} }>
                  10
                </label>
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate9"}
                  
                />
                <label htmlFor={this.traitName + "rate9"} onClick={ ()=>{this.collectRating(9,this.props.traitData.id)} }>9</label>
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate8"}
                  
                />
                <label htmlFor={this.traitName + "rate8"} onClick={ ()=>{this.collectRating(8,this.props.traitData.id)} }>8</label>
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate7"}
                  
                />
                <label htmlFor={this.traitName + "rate7"} onClick={ ()=>{this.collectRating(7,this.props.traitData.id)} }>7</label>
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate6"}
                  
                />
                <label htmlFor={this.traitName + "rate6"} onClick={ ()=>{this.collectRating(6,this.props.traitData.id)} }>6</label>
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate5"}
                  
                />
                <label htmlFor={this.traitName + "rate5"} onClick={ ()=>{this.collectRating(5,this.props.traitData.id)} }>5</label>
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate4"}                  
                  
                />
                <label htmlFor={this.traitName + "rate4"} onClick={ ()=>{this.collectRating(4,this.props.traitData.id)} }>4</label>
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate3"}                  
                  
                />
                <label htmlFor={this.traitName + "rate3"} onClick={ ()=>{this.collectRating(3,this.props.traitData.id)} }>3</label>
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate2"}
                  
                />
                <label htmlFor={this.traitName + "rate2"} onClick={ ()=>{this.collectRating(2,this.props.traitData.id)} }>2</label>
                <input
                  type="radio"
                  name={this.traitName + "-rating"}
                  id={this.traitName + "rate1"}
                  
                />
                <label htmlFor={this.traitName + "rate1"} onClick={ ()=>{this.collectRating(1,this.props.traitData.id)} }>1</label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TraitRating;



