import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {

  state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }


  updateFilter = (e) => {
      this.setState({
        filters: {
          type: e.target.value
        }
      })
  } 

  onFindPetsClick = () => {
    const endOfUrl = this.state.filters.type === 'all' ? "" : '?type='+this.state.filters.type
    fetch(`/api/pets${endOfUrl}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          pets: data
        })
      })
  }

  setAdoptPet = (e) => {
    const indexOfPet = e.target.children[0].innerText

    this.setState(prevState => {
      prevState.pets[indexOfPet].isAdopted = true
      return prevState
      })
  }

  setClassName = (event) => {
    const indexOfPet = event.target.children[0].innerText
    const clickedPet = this.state.pets[indexOfPet]
    
    if(clickedPet.isAdopted === true) {
      event.target.className = 'ui disabled button'
      event.target.previousElementSibling.className = 'ui primary button'
    }
    else {
      event.target.className = 'ui primary button'
      event.target.previousElementSibling.className = 'ui disabled button'
    } 
  }

    
  render() {
    // console.log(this.state.pets)
    
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters updateFilter={this.updateFilter} onClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                setAdoptPet={this.setAdoptPet} 
                pets={this.state.pets}
                setClassName={this.setClassName}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App


    // petList.map(element => {
    //   if(testId === e.target.id){
    //       this.setState(prevState => {
    //         const pets = [...prevState.pets]
    //         pets: {
    //           ...this.state.pets
    //         }

    //       })
    //     }
    // })
  
    
  

    // petList.map(pet => {
    //   if(element.id === e.target.id){
    //     this.setState({
    //         ...petList,
    //         isAdopted: true
    //       }
    //     )
    //   }
    // })

    // petList.map(element => {
      
      // if(element.id === e.target.id){
      //   this.setState({
      //     pets: {
      //       ...petList,
      //       [petList.indexOf(element)]: {
      //         ...petList[petList.indexOf(element)],
      //         isAdopted: true
      //       }
      //     }
      //   })
      // }
    // })
