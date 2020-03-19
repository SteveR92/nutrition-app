import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';


function SpecFood (props) {


    let nutrientName = []
    let unitName = []
    let amount = []

    let foodObj = props.food.foodNutrients.slice(0, 10)

    for (let i = 0; i < foodObj.length; i++) {
        nutrientName.push(foodObj[i].nutrient.name)
        unitName.push(foodObj[i].nutrient.unitName)
        amount.push(foodObj[i].amount)
    }



    return (

        <div className="table-container">
        <div className="nutrition-info">
        <h3>Nutrients per 100g</h3>
        </div>
        <div className="table">
        <Table>

            <th>Nutrient</th><th>Amount</th>
                <TableBody>
                {
                nutrientName.map((nutrient_name, index) => {
                    const name = nutrient_name
                    const amounts = amount[index]
                    const unit = unitName[index]

                    return <tr key={name}><td>{name}</td><td className="amounts">{amounts}{unit}</td></tr>
                    
                    
                })
        }
                </TableBody>
            </Table>
            </div>
            </div>

    )
}

export default SpecFood