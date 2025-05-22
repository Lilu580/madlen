export const Input: React.FC<{placeholder: string}>= ({placeholder}) => {
    return (
        <input type="text" className="placeholder-gray30 w-full rounded-[10px] p-4 border-2 border-gray40 border-solid outline-gray80 text-gray60" title="search" placeholder={placeholder}/>
    )
}