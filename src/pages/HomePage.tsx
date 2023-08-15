import React from 'react'
import Button from '../components/Button'

const HomePage = () => {
    return (
        <div className='grid grid-cols-2 grid-rows-2 gap-4 p-4'>
            <Button className='col-span-2 bg-primary-clr'>غذا بدم و غذا بگیرم</Button>
            <Button className='bg-primary-clr'>فقط غذا بدم</Button>
            <Button className='bg-primary-clr'>فقط غذا بگیرم</Button>
        </div>
    )
}

export default HomePage