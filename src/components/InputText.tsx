type InputTextProps = {
    id: string
    title: string
}

export default function InputText( props: InputTextProps) {
    return(
        <label htmlFor={props.id} className="relative flex-1 min-w-[200px]">
            <input type="text" id={props.id} placeholder=" " className="peer w-full rounded border border-gray-300 px-3 pt-5 pb-2 shadow-sm text-sm focus:border-rose-800 focus:ring-rose-800" />
            <span className="absolute left-3 -top-1 peer-not-[value='']  text-gray-500 text-sm bg-white px-1 transition-all duration-200  peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm  peer-focus:-top-2 peer-focus:text-xs peer-focus:text-rose-800">{props.title}</span>
        </label>
    )
}