import React, { useState } from 'react'

import FoodItem from './FoodItem'

const foods = [
    { name: 'فیله مرغ', id: 1 },
    { name: 'قیمه', id: 2 },
]

const FoodList = () => {
    const [selectedFoodId, setSelectedFoodId] = useState<number>(-1)

    return (
        <div className="flex gap-2" >
            {foods.map(food =>
                <FoodItem key={food.id} food={food} setSelectedFoodId={setSelectedFoodId} selectedFoodId={selectedFoodId} />)}
        </div >
    )
}

export default FoodList