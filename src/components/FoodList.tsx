import React from 'react'

import FoodItem from './FoodItem'

const foods = [
    { name: 'فیله مرغ', id: 1 },
    { name: 'قیمه', id: 2 },
]

const FoodList = () => {
    return (
        <div className="flex gap-2" >
            {foods.map(food =>
                <FoodItem key={food.id} foodName={food.name} />)}
        </div >
    )
}

export default FoodList