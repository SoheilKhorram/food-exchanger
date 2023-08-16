import React from 'react'

interface checkboxProps {
    label: string
    checked?: boolean
    className?: string
}

const Checkbox = ({ label, checked, className }: checkboxProps) => {
    return (
        <div className={`flex items-center justify-end w-full gap-2 ${className}`}>
            <label >{label}</label>
            <div className="flex items-center gap-2">
                <input
                    className="relative w-4 h-4 mt-1 border border-solid rounded appearance-none cursor-pointer border-primary-clr peer shrink-0 disabled:border-steel-400"
                    type="checkbox"
                    checked={checked}
                />
                <svg
                    className="absolute hidden w-4 h-4 mt-1 outline-none pointer-events-none peer-checked:block stroke-primary-clr"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-3.5 0 30 30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>

            </div>
        </div>
    )
}

export default Checkbox