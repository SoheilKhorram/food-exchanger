import React from 'react'

import Button from '../components/Button'
import photo from '../assets/imgs/1.jpg'
import Input from '../components/Input'
import Checkbox from '../components/Checkbox'

const HomePage = () => {
    return (
        <div className='flex flex-col min-h-screen gap-6 p-4'>
            <div className='grid grid-cols-2 grid-rows-2 gap-4'>
                <Button className='col-span-2 bg-primary-clr'>غذا بدم و غذا بگیرم</Button>
                <Button className='bg-primary-clr'>فقط غذا بدم</Button>
                <Button className='bg-primary-clr'>فقط غذا بگیرم</Button>
            </div>
            <div className='flex flex-col items-end gap-3'>
                <h3 className='font-semibold text-gold-clr-300'>کدوم غذا ؟</h3>
                <div className="flex gap-2">
                    <div className='flex flex-col items-end p-2 rounded-lg text-txt-clr-dark bg-dark-clr-300'>
                        <img className='mb-4 rounded-lg' src={photo} alt=''></img>
                        <h4 className='self-center mb-3 font-bold text-gold-clr-300'>فیله مرغ</h4>
                        <Checkbox label="نیم پرس" className='mb-4 text-sm' />
                        <Button className='w-full py-2 text-sm bg-primary-clr'>انتخاب</Button>
                    </div>
                    <div className='flex flex-col items-end p-2 rounded-lg text-txt-clr-dark align-end bg-dark-clr-300'>
                        <img className='mb-4 rounded-lg' src={photo} alt=''></img>
                        <h4 className='self-center mb-3 font-bold text-gold-clr-300'>قیمه</h4>
                        <Checkbox label="نیم پرس" className='mb-4 text-sm' />
                        <Button className='w-full py-2 text-sm bg-primary-clr'>انتخاب</Button>
                    </div>
                </div>
            </div>
            <Input className='w-full bg-transparent' label=': کد فراموشی' />
            <Button className='mt-auto justify-self-end bg-primary-clr'>بزن بریم</Button>
        </div>
    )
}

export default HomePage