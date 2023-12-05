import React, { ReactNode } from "react"

export const JobCardTemplate = ({
    children
}: {
    children: ReactNode
}) => {
    return (
        <li className='bg-white rounded shadow-xl rounded-t-lg border-2 border-blue-500 mt-1'>
            {children}
        </li>
    )
}
