import { useModal } from "../../hooks/useModal"
import type { PreparationMode } from "../../types/PreparationMode";
import type { Revenues } from "../../types/Revenues";


type PreparationProps = {
    preparation?: PreparationMode;
    revenue?: Revenues;
};
export default function Preparation({ revenue, preparation }: PreparationProps){

  const { closeModal } = useModal();
  const ingredientes = preparation?.ingredientes ?? [];
  const instrucoes = preparation?.instrucoesPreparo ?? [];
  const semConteudo = ingredientes.length === 0 && instrucoes.length === 0;

  return (
    <div id="modalPreparation" className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex-col items-start text-start">
          <h2 id="modalTitle" className="text-xl font-bold text-gray-900 sm:text-2xl">Modo de Preparo</h2>
          <h4 id="modalSubTitle" className="text-md font-bold text-gray-500">{revenue?.nome}</h4>
        </div>
        <button type="button" className="-me-4 -mt-4 rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-50 hover:text-gray-600 focus:outline-none" aria-label="Close" onClick={closeModal}>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
    <div className="mt-4">
      <p className="text-pretty text-start text-gray-700">
        Segue o passo a passo do modo de preparo dessa deliciosa receita.
      </p>
      {instrucoes.length > 0 && (
        <ol className="relative mt-6 mb-6 space-y-8 text-start before:absolute before:-ml-px before:h-full before:w-0.5 before:rounded-full before:bg-gray-200">
          {instrucoes.map((i) => (
            <li
              key={i.etapa}
              className="relative -ms-4 flex gap-4"
            >
              <span className="size-8 shrink-0 rounded-full bg-rose-800 pt-0.5 text-center text-lg text-white">
                {i.etapa}
              </span>

              <div className="-mt-2">
                <h3 className="text-lg font-bold text-gray-900">
                  {i.descricao}
                </h3>
              </div>
            </li>
          ))}
        </ol>
      )}
      {ingredientes.length > 0 && (
        <div
          id="containerIngredientes"
          className="mt-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          <h2 className="mb-3 text-base font-semibold text-start text-gray-700">
            Ingredientes
          </h2>

          <ul className="mt-3 space-y-2">
            {ingredientes.map((ingredient, index) => (
              <li
                key={index}
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm transition-colors hover:bg-gray-100"
              >
                <span className="text-gray-700">
                  {ingredient.quantidade}x {ingredient.nome}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* EMPTY STATE */}
      {semConteudo && (
        <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
          <span className="mb-3 text-4xl">🍽️</span>

          <h3 className="text-base font-semibold text-gray-700">
            Receita incompleta
          </h3>

          <p className="mt-2 max-w-sm text-sm text-gray-500">
            Esta receita ainda não possui ingredientes nem modo de preparo cadastrados.
          </p>
        </div>
      )}
    </div>
  </div>
);


} 