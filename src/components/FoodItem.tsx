import React from 'react'

import Checkbox from './Checkbox'
import Button from './Button'
import photo from '../assets/imgs/1.jpg'

interface foodItemProps {
    foodName: string
    className?: string
}

const FoodItem = ({ foodName, className }: foodItemProps) => {
    return (
        <div className={`flex flex-col items-end p-2 rounded-lg text-txt-clr-dark bg-dark-clr-300 ${className}`}>
            <img className='mb-4 rounded-lg' src={photo} alt=''></img>
            <h4 className='self-center mb-3 font-bold text-gold-clr-300'>{foodName}</h4>
            <Checkbox label="نیم پرس" className='mb-4 text-sm' />
            <Button onClick={() => { }} className='w-full py-2 text-sm bg-primary-clr'>انتخاب</Button>
        </div>
    )
}

export default FoodItem