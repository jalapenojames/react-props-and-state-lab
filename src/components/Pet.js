import React from 'react'

class Pet extends React.Component {

  handleClick = (event) => {
    this.props.setAdoptPet(event)
    this.props.setClassName(event)
  }


  // returns ui disabled or ui primary depending on state
  displayButtons = () => (
    <>
      {this.props.isAdopted === true? <><button className="ui primary button">Already adopted</button><button id={this.props.id} onClick={this.handleClick} className="ui disabled button">Adopt pet<div style={{display: 'none'}}>{this.props.location}</div></button></> : <><button className="ui disabled button">Already adopted</button><button id={this.props.id} onClick={this.handleClick} className="ui primary button">Adopt pet<div style={{display: 'none'}}>{this.props.location}</div></button></>}
    </>
  )

  handleGender = () => {
    return this.props.gender === 'female'? '♀' : '♂'
  }

  render() {

    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {/*'♀' OR '♂' */this.handleGender() +" "+ this.props.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.age}</p>
            <p>Weight: {this.props.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.displayButtons()}
        </div>
      </div>
    )
  }
}

export default Pet
