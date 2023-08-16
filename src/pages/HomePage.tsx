import React from 'react'

import Button from '../components/Button'
import photo from '../assets/imgs/1.jpg'
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'

const HomePage = () => {
    return (
        <div className='flex flex-col min-h-screen gap-5 p-4'>
            <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                <Button className='col-span-2 text-dark-clr-400 bg-primary-clr'>غذا بدم و غذا بگیرم</Button>
                <Button className='text-dark-clr-400 bg-primary-clr'>فقط غذا بدم</Button>
                <Button className='text-dark-clr-400 bg-primary-clr'>فقط غذا بگیرم</Button>
            </div>
            <div className='flex flex-col items-end gap-3'>
                <h3 className='text-primary-clr'>کدوم غذا؟</h3>
                <div className="flex gap-2">
                    <div className='flex flex-col items-end p-2 rounded-lg text-primary-clr-100 bg-dark-clr-400'>
                        <img className='mb-4 rounded-lg' src={photo} alt=''></img>
                        <h4 className='self-center mb-3 font-bold weigh'>فیله مرغ</h4>
                        <Checkbox label="نیم پرس" className='mb-4 text-sm' />
                        <Button className='w-full py-2 text-sm bg-primary-clr text-dark-clr-400'>انتخاب</Button>
                    </div>
                    <div className='flex flex-col items-end p-2 rounded-lg text-primary-clr-100 align-end bg-dark-clr-400'>
                        <img className='mb-4 rounded-lg' src={photo} alt=''></img>
                        <h4 className='self-center mb-3 font-bold'>قیمه</h4>
                        <Checkbox label="نیم پرس" className='mb-4 text-sm' />
                        <Button className='w-full py-2 text-sm bg-primary-clr text-dark-clr-400'>انتخاب</Button>
                    </div>
                </div>
            </div>
            <Input className='w-full' label='کد فراموشی' />
            <Button className='mt-auto justify-self-end bg-primary-clr'>بزن بریم</Button>
        </div>
    )
}

export default HomePage