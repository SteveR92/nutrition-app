import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import SearchBar from './components/SearchBar'
import FoodList from './components/FoodList'
import SpecFoods from './components/SpecFoods'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css' // Import the CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './App.css';

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
library.add(faAppleAlt, faArrowLeft)



const API_KEY = `${process.env.REACT_APP_API_KEY}`

console.log(API_KEY)

class App extends React.Component {
  constructor() {
    super()
    this.handleSearchTerm = this.handleSearchTerm.bind(this)

    this.state = {
      searchTerm: '',
      foods: [],
      urlNumber: [],
      specFood: [],
      loading: false,
      mounted: false
    }

}

  handleSearchTerm(value) {
    this.setState({
      searchTerm: value,
    })
  }


  FoodListApi = () => {
    const foodListUrl = `https://api.nal.usda.gov/fdc/v1/search?api_key=${API_KEY}&generalSearchInput=${this.state.searchTerm}`
    fetch(foodListUrl)
    .then(res => {
      return res.json()})
    .then(data => {
   
      this.setState({
        foods: data.foods,

      })
    })
    .catch(err => {
      console.log(err)
    })
    if (this.state.loading === true) return <div><h1 className='status'>Error</h1></div>
  }


  componentDidUpdate(prevProps, prevState) {

    if (prevState.searchTerm !== this.state.searchTerm) {
      this.FoodListApi() 
      this.setState({ mounted: true })  
    }
  }


  render() {
    const mountID = this.state.mounted ? "mounted" : "not-mounted"
    return (
      <div className={mountID}>
    
      <BrowserRouter>
      <div className="container" >
      <div className="top-container">
      <div className="header"><FontAwesomeIcon className="icon" id="homepage-icon" icon={faAppleAlt} /><h1>Nutri-App</h1></div>

      </div>
      <div className="spec-food-container">
      <Route
        exact path = "/"
        render={() => <div> 
          <SearchBar id="search-bar" handleSearchTerm={this.handleSearchTerm} clearList={this.clearList} /> 
          { this.state.mounted ? <FoodList searchResults={this.state.foods} getNumber={this.getNumber}/> : ""}
          </div> }
          />
  
      <Route
        exact path = "/:food_id"
        render={({match}) => <SpecFoods specFoods={this.state.specFood} match={match} />}
      />
   

      </div>
      </div>
 
      </BrowserRouter>
      </div>
    )

  } 
}

export default App;
