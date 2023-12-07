export const BorderArea = ({
    title,
    children
}: {
    title: string,
    children: React.ReactNode
}) => {
    return (
        <div className="border-pink-700 border rounded shadow-xl m-2 mb-5 p-2 pt-5 mt-10 relative">
            {title && <div className="absolute top-[-1rem] left-2 px-2 bg-pink-200 border border-pink-600 text-xl text-gray-700 "><p className="stroke-white">{title}</p></div>}
            {children}
        </div>
    )
}