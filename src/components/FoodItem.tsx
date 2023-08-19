import React, { SetStateAction } from 'react'

import Checkbox from './Checkbox'
import Button from './Button'
import photo from '../assets/imgs/1.jpg'
import tick from '../assets/svgs/tick.svg'

interface foodItemProps {
    food: { name: string, id: number }
    className?: string
    selectedFoodId: number
    setSelectedFoodId: React.Dispatch<SetStateAction<number>>
}

const FoodItem = ({ food, className, setSelectedFoodId, selectedFoodId }: foodItemProps) => {
    const handleFoodSelect = () => {
        if (selectedFoodId === food.id) {
            setSelectedFoodId(-1)
        } else {
            setSelectedFoodId(food.id)
        }
    }


    return (
        <div className={`relative flex flex-col items-end p-2 rounded-lg text-txt-clr-dark bg-dark-clr-300 ${selectedFoodId === food.id ? 'border border-solid border-gold-clr-300' : ''} ${className}`}>
            {selectedFoodId === food.id && <img src={tick} alt="tick Icon" className="absolute inline-block w-6 h-6 justify-self-center" style={{ top: '-18px', left: '46%' }} />}
            <img className='mb-4 rounded-lg' src={photo} alt=''></img>
            <h4 className='self-center mb-3 font-bold text-gold-clr-300'>{food.name}</h4>
            <Checkbox label="نیم پرس" className='mb-4 text-sm' />
            <Button onClick={handleFoodSelect} className='w-full py-2 text-sm bg-primary-clr'>انتخاب</Button>
        </div>
    )
}

export default FoodItem