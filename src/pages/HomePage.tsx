import React from 'react'

import Button from '../components/Button'
import photo from '../assets/imgs/1.jpg'
import Input from '../components/Input'

const HomePage = () => {
    return (
        <div className='p-4'>
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
                        <h4 className='self-center mb-3'>فیله مرغ</h4>
                        <p className='mb-5'>نیم پرس</p>
                        <Button className='w-full py-2 text-sm bg-primary-clr text-dark-clr-400'>انتخاب</Button>
                    </div>
                    <div className='flex flex-col items-end p-2 rounded-lg text-primary-clr-100 align-end bg-dark-clr-400'>
                        <img className='mb-4 rounded-lg' src={photo} alt=''></img>
                        <h4 className='self-center mb-3'>قیمه</h4>
                        <p className='mb-5'>نیم پرس</p>
                        <Button className='w-full py-2 text-sm bg-primary-clr text-dark-clr-400'>انتخاب</Button>
                    </div>
                </div>
            </div>
            <Input className='w-full' label='کد فراموشی' />
        </div>
    )
}

export default HomePage