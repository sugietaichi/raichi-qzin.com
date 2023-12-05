import { ReactNode } from "react"

export const BorderArea = ({
    title,
    children
}: {
    title: string
    children: ReactNode
}) => {
    return (
        <div className="border-gray-400 border rounded shadow-xl m-2 mb-5 p-2 pt-5 mt-5 relative">
            <div className="absolute top-[-1rem] left-2 px-2 bg-gray-200 border border-gray-400">{title}</div>
            {children}
        </div>
    )
}