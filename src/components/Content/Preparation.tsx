import { useModal } from "../../hooks/useModal"
import type { PreparationMode } from "../../types/PreparationMode";
import type { Revenues } from "../../types/Revenues";


type PreparationProps = {
    preparation?: PreparationMode;
    revenue?: Revenues;
};
export default function Preparation({ revenue, preparation }: PreparationProps){

console.log(preparation);

  const { closeModal } = useModal();

    return (
            <div id="modalPreparation" className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <div className="flex items-start justify-between">
                    <div className="flex-col justify-start text-start items-start">
                        <h2 id="modalTitle" className="text-xl font-bold text-gray-900 sm:text-2xl">Modo de Preparo</h2>
                        <h4 id="modalSubTitle" className="text-md font-bold text-gray-500 sm:text-2xl">{revenue?.nome}</h4>
                    </div>
                    <button type="button" className="-me-4 -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none" aria-label="Close" onClick={closeModal} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="mt-4">
                    <p className="text-pretty text-gray-700 text-start"> Segue o passo a passo do modo de preparo dessa deliciosa receita.</p>
                    <ol className="relative text-start mt-6 mb-6 space-y-8 before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200">
                      {
                        preparation?.instrucoesPreparo?.map(i => (
                          <li className="relative -ms-4 flex text-start gap-4">
                            <span className="size-8 shrink-0 rounded-full bg-rose-800 text-center text-white text-lg pt-0.6">{i.etapa}</span>
                            <div className="-mt-2">
                              <h3 className="text-lg font-bold text-gray-900">{i.descricao}</h3>
                              <p className="mt-0.5 text-sm text-gray-700">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
                                adipisci tenetur sunt quae exercitationem sed pariatur porro!
                              </p>
                            </div>
                          </li>
                        ))
                      }
                    </ol>
                </div>
            </div>
    )
} 