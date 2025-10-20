import { useModal } from "../../hooks/useModal"

export default function New() {

    const {closeModal} = useModal();

    return(
        <div className="fixed inset-0 z-50 grid place-content-center bg-black/50 p-4" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
            <div className="w-full max-w-lvw rounded-lg bg-white p-6 shadow-lg">
                <div className="flex items-start justify-between">
                    <h2 id="modalTitle" className="text-xl font-bold text-gray-900 sm:text-2xl">Nova Receita</h2>
                    <button type="button" className="-me-4 -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none" aria-label="Close" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => {closeModal()}} >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="mt-4">
                    <p className="text-pretty text-gray-700 text-start">Adicione sua nova receita, incluindo seus dados básicos, ingredientes e modo de preparo.</p>
                    <div className="flex gap-2 mt-6">
                        <label htmlFor="txtNomeReceita" className="relative">
                            <input type="text" id="txtNomeReceita" placeholder="" className="p-4 peer mt-1 w-full rounded border border-gray-300 shadow-sm sm:text-sm" />
                            <span className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-1 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5" >
                                Nome da Receita
                            </span>
                        </label>
                        <label htmlFor="txtTipoReceita">
                            <span className="text-sm font-medium text-gray-700"> Tipo Receita </span>
                            <select name="txtTipoReceita" id="txtTipoReceita" className="p-2 mt-0.5 w-full rounded border border-gray-300 shadow-sm sm:text-sm">
                                <option value="">Por favor, selecione</option>
                                <option value="Massas">Massas</option>
                                <option value="Massas">Doces</option>
                            </select>
                        </label>
                    </div>          
                </div>

                <footer className="mt-6 flex justify-end gap-2">
                    <button type="button" className="rounded bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200" onClick={closeModal}>Cancelar</button>
                    <button type="button" className="rounded bg-yellow-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-yellow-700">Salvar</button>
                </footer>
            </div>
        </div>
    )
}