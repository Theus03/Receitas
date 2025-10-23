type SelectProps = {
    id: string;
    options: string[];
    title: string;
}

export default function Select(props: SelectProps) {
    return (
        <label htmlFor={props.id} className="relative flex-1 min-w-[200px]">
            <select id={props.id} name={props.id} defaultValue="" className="peer w-full appearance-none rounded border border-gray-300 px-3 pt-5 pb-2 shadow-sm text-sm focus:border-rose-800 focus:ring-rose-800">
                <option value="" disabled hidden></option>
                {
                    props.options.map((op) => <option value={op.toString()}>{op.toString()}</option>)
                }
            </select>
            <span className="absolute left-3  bg-white px-1 text-gray-500 text-sm transition-all duration-200 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-rose-800 peer-[value='']:top-3.5 peer-[value='']:text-gray-400 peer-[value='']:text-sm
                peer-not-[value='']: -top-1 peer-not-[value='']:text-xs peer-not-[value='']:text-gray-700">{props.title}</span>
        </label>
    )
}