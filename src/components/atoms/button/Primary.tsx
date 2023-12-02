export const PrimaryButton = (props: { text: string }) => {
    return (
        <button className='w-full px-4 py-4 text-white bg-blue-500 rounded transform transition-transform duration-200 hover:bg-blue-400 hover:scale-95'>
            {props.text}
        </button>
    )
}