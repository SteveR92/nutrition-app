import React from 'react'
import SpecFood from './SpecFood'
import { Link } from 'react-router-dom'
import '../components/specfood.css'
import '../components/table.css'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import NoData from './NoData'

export default class SpecFoods extends React.Component {
   
  constructor() {
    super()
    this.state = ({
      loaded: false,
      noData: false
    })
  }
    
  async componentDidMount() {
    const response = await fetch(`https://api.nal.usda.gov/fdc/v1/${this.props.match.params.food_id}?api_key=MuZ2F5P9sNM6L36BrEsIAziA2vdoH85VFFB5asBE`)
    const json = await response.json()

    if (json.foodNutrients.length > 0) {
    this.setState({ food: json, loaded: true })
    } else {

      this.setState({noData: true})
    }
  }

 
  render() {  
    
    const theme = createMuiTheme({
      palette: {

        primary: green,
      },
    });



    if (this.state.noData === true) return <NoData />
    if (this.state.loaded === false) return <div><h1 className='status'>loading</h1></div>
    return (
      <div className="spec-foods">
      <div className="button-container">
      <div className="back-button">
        <Link to={`/`} className="link"><ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className="search-new-button">
        <FontAwesomeIcon className="icon" id="arrow-icon" icon={faArrowLeft} />
          <span id="button-text">Search New Food</span>
        </Button>
      </ThemeProvider></Link>
      </div>
      </div> 
      <div className="food-info">
        <h3>{this.state.food.description.toLowerCase()}</h3> 
        <h2>{this.state.food.brandOwner}</h2>
      </div> 
        <SpecFood food={this.state.food}/>
      </div>
      
    )
    
  }
}



