import { useModal } from "../../hooks/useModal"
import InputText from "../InputText";
import Select from "../Select";

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
                    <div className="flex flex-wrap gap-4 mt-6">
                        <InputText id="txtNomeReceita" title="Nome da Receita" />
                        <Select id="txtTipoReceita" options={["Massas", "Doces"]} title="Tipo de Receita" />
                    </div>
                    <div id="containerModoPreparo" className="mt-4 border border-gray-200 rounded-2xl p-4 shadow-sm bg-white">
                        <h2 className="text-base font-semibold text-start text-gray-700 mb-3">Modo de Preparo</h2>
                        <div className="flex gap-2">
                            <input type="text" placeholder="Adicione uma etapa..." className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-rose-800 focus:ring-rose-800" />
                            <button type="button" className="p-2 bg-rose-800 text-white rounded-lg hover:bg-rose-700 transition-colors" > + </button>
                        </div>
                        <ul className="mt-3 space-y-2">
                            <li className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 transition-colors">
                                <span className="text-gray-700">Ferver a água</span>
                                <button type="button" className="text-gray-500 hover:text-rose-600 transition-colors" >🗑️ </button>
                            </li>
                            <li className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 transition-colors">
                                <span className="text-gray-700">Adicionar o macarrão</span>
                                <button type="button" className="text-gray-500 hover:text-rose-600 transition-colors" > 🗑️ </button>
                            </li>
                        </ul>
                    </div>
                    <div id="containerIngredientes" className="mt-4 border border-gray-200 rounded-2xl p-4 shadow-sm bg-white">
                        <h2 className="text-base font-semibold text-start text-gray-700 mb-3">Ingredientes</h2>
                        <div className="flex gap-2">
                            <input type="text" placeholder="Nome" className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-rose-800 focus:ring-rose-800" />
                            <input type="text" placeholder="Quantidade" className="flex-1 rounded border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-rose-800 focus:ring-rose-800" />
                            <button type="button" className="p-2 bg-rose-800 text-white rounded-lg hover:bg-rose-700 transition-colors" > + </button>
                        </div>
                        <ul className="mt-3 space-y-2">
                            <li className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 transition-colors">
                                <span className="text-gray-700">1x Creme de Leite</span>
                                <button type="button" className="text-gray-500 hover:text-rose-600 transition-colors" >🗑️ </button>
                            </li>
                            <li className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 transition-colors">
                                <span className="text-gray-700">1x Macarrão</span>
                                <button type="button" className="text-gray-500 hover:text-rose-600 transition-colors" > 🗑️ </button>
                            </li>
                        </ul>
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