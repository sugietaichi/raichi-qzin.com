export const Tag = ({ text }: { text: string }): JSX.Element => {
    return (
        <span className="bg-blue-100 text-blue-600 text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">{text}</span>
    )
}