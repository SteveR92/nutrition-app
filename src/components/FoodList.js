import React from 'react'
import { Link } from 'react-router-dom'
import '../components/foodlist.css'
import '../components/table.css'



export default function FoodList(props) {
    console.log(props)
    const foods = props.searchResults
   
    const results = foods.slice(0, 10)

    let foodId = []
    let description = []
    let brandOwner = []



    for (let i = 0; i < results.length; i++) {
        foodId.push(results[i].fdcId)
        description.push(results[i].description.toLowerCase())
        brandOwner.push(results[i].brandOwner)
    }

    


    return (
            <div className="search-results">
                <div className="item-brand">
                </div>
                
                <div className="results-container">
                <ul>
                {
                description.map((food_name, index) => {
                    const des = food_name
                    const id = foodId[index]
                    const brand = brandOwner[index]

                    return <Link to={`/${id}`} key={id} className="link"><li><span className="item">{des}</span> <span className="brand">{brand}</span></li></Link>
                    
        
                })
        }
        </ul>
        </div>

        </div>

    )
}




