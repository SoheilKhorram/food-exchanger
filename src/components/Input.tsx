import React from 'react'

interface inputProps {
    className?: string,
    type?: string,
    placeholder?: string,
    name?: string,
    disabled?: boolean,
    required?: boolean,
    label: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onClick?: (e: React.MouseEvent<HTMLInputElement>) => void,
}

const Input = ({ label, type, placeholder, name, disabled, className }: inputProps) => {
    return (
        <div className='flex flex-col items-end gap-3'>
            <label className='font-semibold text-primary-clr'>{label}</label>
            <input className={`bg-dark-clr-300 text-primary-clr rounded-lg p-4 border border-solid focus-visible:border-primary-clr ${className}`} type={type} placeholder={placeholder} name={name} disabled={disabled} />
        </div>
    )
}

export default Input