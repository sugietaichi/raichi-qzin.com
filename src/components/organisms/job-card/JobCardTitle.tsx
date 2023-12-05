export const JobCardTitle = ({
    text = "[タイトルを追加]"
}: {
    text: string
}) => {
    return (
        <div>
            <h5 className="text-xl font-bold leading-none text-white p-2 m-2">{text}</h5>
        </div>
    )
}