import React, { useState } from 'react'

import Button from '../components/Button'
import Input from '../components/Input'
import FoodList from '../components/FoodList'
import tick from '../assets/svgs/tick.svg'

const HomePage = () => {
    const [selectedButtonId, setSelectedButtonId] = useState(-1)

    const handleButtonClick = (buttonId: number) => {
        if (selectedButtonId === buttonId) {
            setSelectedButtonId(-1)
        } else {
            setSelectedButtonId(buttonId)
        }
    }

    return (
        <div className='flex flex-col min-h-screen gap-6 p-4'>
            <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                <Button
                    onClick={() => { handleButtonClick(1) }}
                    className={`col-span-2 bg-primary-clr`}
                >
                    {selectedButtonId !== 1 ? null : <img src={tick} alt="tick Icon" className="inline-block w-6 h-6 mr-2" />}
                    غذا بدم و غذا بگیرم
                </Button>
                <Button
                    onClick={() => { handleButtonClick(2) }}
                    className={`bg-primary-clr`}
                >
                    {selectedButtonId !== 2 ? null : <img src={tick} alt="tick Icon" className="inline-block w-6 h-6 mr-2" />}
                    فقط غذا بدم
                </Button>
                <Button
                    onClick={() => { handleButtonClick(3) }}
                    className={`bg-primary-clr`}
                >
                    {selectedButtonId !== 3 ? null : <img src={tick} alt="tick Icon" className="inline-block w-6 h-6 mr-2" />}
                    فقط غذا بگیرم
                </Button>
            </div>
            <div className='flex flex-col items-end gap-3'>
                <h3 className='font-semibold text-gold-clr-300'>کدوم غذا ؟</h3>
                <FoodList />
            </div>
            <Input type='number' className='w-full bg-transparent' label=': کد فراموشی' />
            <Button onClick={() => { }} className='mt-auto justify-self-end bg-primary-clr'>بزن بریم</Button>
        </div>
    )
}

export default HomePage