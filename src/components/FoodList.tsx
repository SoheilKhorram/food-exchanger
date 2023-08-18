import React from 'react'

import FoodItem from './FoodItem'

const FoodList = () => {
    return (
        <div className="flex gap-2">
            <FoodItem foodName='فیله مرغ' />
            <FoodItem foodName='قیمه' />
        </div>
    )
}

export default FoodList