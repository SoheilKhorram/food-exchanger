import React, { ReactNode } from 'react'

interface buttonProps {
    className: string
    children: ReactNode,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ className, children, onClick }: buttonProps) => {
    return (
        <button onClick={onClick} className={`rounded-lg py-3 px-4 font-semibold text-txt-clr-dark ${className}`}>
            {children}
        </button>
    )
}

export default Button