import React from 'react'

class Filters extends React.Component {
  render() {

    const testId = "5c142d9e-ea45-4231-8146-cccf71c704c0"

    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.props.updateFilter} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={()=>this.props.onClick(testId)} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
