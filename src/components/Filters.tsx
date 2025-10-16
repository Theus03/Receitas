export default function Filters() {
    return (
        <div className="flex z-40 gap-4 sm:gap-6">
            <details className="group relative cursor-pointer">
                <summary className="flex items-center gap-2 border-b border-gray-300 pb-1 text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900 [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-medium"> Categorias </span>
                <span className="transition-transform group-open:-rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </span>
                </summary>
                <div className="z-50 w-64 divide-y divide-gray-300 rounded border border-gray-300 bg-white shadow-sm group-open:absolute group-open:start-0 group-open:top-8">
                    <div className="flex items-center justify-between px-3 py-2">
                        <span className="text-sm text-gray-700"> 0 Selecionado </span>
                        <button type="button" className="text-sm text-gray-700 underline transition-colors hover:text-gray-900" > Limpar </button>
                    </div>
                    <fieldset className="p-3">
                        <legend className="sr-only">Checkboxes</legend>
                        <div className="flex flex-col items-start gap-3">
                        <label htmlFor="Option1" className="inline-flex items-center gap-3">
                            <input type="checkbox" className="size-5 rounded border-gray-300 shadow-sm" id="categoriaMassas" />
                            <span className="text-sm font-medium text-gray-700"> Massas </span>
                        </label>
                        <label htmlFor="Option2" className="inline-flex items-center gap-3">
                            <input type="checkbox" className="size-5 rounded border-gray-300 shadow-sm" id="categoriaFrango" />
                            <span className="text-sm font-medium text-gray-700">Frango </span>
                        </label>
                        <label htmlFor="Option3" className="inline-flex items-center gap-3">
                            <input type="checkbox" className="size-5 rounded border-gray-300 shadow-sm" id="categoriaCarne" />
                            <span className="text-sm font-medium text-gray-700"> Carne </span>
                        </label>
                        </div>
                    </fieldset>
                </div>
            </details>
            <details className="group relative cursor-pointer">
                <summary className="flex items-center gap-2 border-b border-gray-300 pb-1 text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900 [&::-webkit-details-marker]:hidden" >
                    <span className="text-sm font-medium"> Tempo Total </span>
                    <span className="transition-transform group-open:-rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </summary>
                <div className="z-40 w-64 divide-y divide-gray-300 rounded border border-gray-300 bg-white shadow-sm group-open:absolute group-open:start-0 group-open:top-8" >
                <div className="flex items-center justify-between px-3 py-2">
                    <span className="text-sm text-gray-700"> Tempo de Preparo </span>
                    <button type="button" className="text-sm text-gray-700 underline transition-colors hover:text-gray-900" >
                        Limpar
                    </button>
                </div>

                <div className="flex items-center gap-3 p-3">
                    <label htmlFor="Hours">
                        <span className="text-sm text-gray-700"> Horas </span>
                        <input type="number" id="Hours" value="00" className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" />
                    </label>
                    <label htmlFor="Minutes">
                        <span className="text-sm text-gray-700"> Minutos </span>
                        <input type="number" id="Minutes" value="30" className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" />
                    </label>
                </div>
                </div>
            </details>
        </div>
    )
}