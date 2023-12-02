export type SelectOptionType = {
    value: string
    text: string
}

export const Select = ({ list }: { list: SelectOptionType[] }) => {
    return (
        <select className='w-full px-3 py-3 border rounded-lg bg-gray-200 border-gray-300 focus:outline-none focus:border-blue-400'>
            {list.map(r => (
                <option key={r.value} value={r.value}>
                    {r.text}
                </option>
            ))}
        </select>
    )
}