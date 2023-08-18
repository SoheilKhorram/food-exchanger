import React from 'react'

import Button from '../components/Button'
import Input from '../components/Input'
import FoodList from '../components/FoodList'

const HomePage = () => {
    return (
        <div className='flex flex-col min-h-screen gap-6 p-4'>
            <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                <Button onClick={() => { }} className='col-span-2 bg-primary-clr'>غذا بدم و غذا بگیرم</Button>
                <Button onClick={() => { }} className='bg-primary-clr'>فقط غذا بدم</Button>
                <Button onClick={() => { }} className='bg-primary-clr'>فقط غذا بگیرم</Button>
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