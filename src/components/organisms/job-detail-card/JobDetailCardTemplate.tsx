export const JobDetailCardTemplate = ({
    children
}: {
    children: React.ReactNode
}) => {
    return (
        <div className='bg-white rounded shadow-xl rounded-t-lg border-2 border-blue-500 mt-3'>
            {children}
        </div>
    )
}