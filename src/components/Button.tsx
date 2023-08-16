import React, { ReactNode } from 'react'

interface buttonProps {
    className: string
    children: ReactNode,
}

const Button = ({ className, children }: buttonProps) => {
    return (
        <button className={`rounded-lg py-3 px-4 font-semibold ${className}`}>
            {children}
        </button>
    )
}

export default Button