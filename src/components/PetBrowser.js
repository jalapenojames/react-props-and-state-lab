import React from 'react'
import Pet from './Pet'

class PetBrowser extends React.Component {

  displayPets = () => (
    this.props.pets.map(pet => <Pet 
      key= {'pet'+pet.name+pet.age}
      name={pet.name} 
      gender={pet.gender}
      age={pet.age} 
      weight={pet.weight} 
      type={pet.type}
      id={pet.id}
      isAdopted={pet.isAdopted}
      setAdoptPet={this.props.setAdoptPet}
      setClassName={this.props.setClassName}
      location={this.props.pets.indexOf(pet)}
      />
    )
  )

  render() {
    return <div className="ui cards">{this.displayPets()}</div>
  }
}

export default PetBrowser
