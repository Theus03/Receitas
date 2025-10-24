export default function Filters() {
  return (
    <div className="relative z-40 flex flex-wrap items-center gap-4 sm:gap-6">
      {/* 🔍 Campo de Pesquisa */}
      <label htmlFor="Search" className="relative block w-full sm:w-72">
        <input
          type="text"
          id="Search"
          placeholder=" "
          className="peer w-full border-0 border-b-2 border-gray-300 bg-transparent h-10 py-2 pl-0 pr-10 text-sm text-gray-900 focus:border-rose-800 focus:ring-0 focus:outline-none"
        />
        <span className="absolute left-0 top-1/2 -translate-y-1/2 text-sm text-gray-500 transition-all duration-200
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-gray-400
          peer-focus:-top-3 peer-focus:text-xs peer-focus:text-rose-800 bg-white px-0.5">
          Pesquisar
        </span>

        <button
          type="button"
          aria-label="Buscar"
          className="absolute inset-y-0 right-0 grid place-content-center text-gray-600 hover:text-rose-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </label>

      {/* 🧩 Categorias */}
      <details className="group relative cursor-pointer">
        <summary className="flex items-center gap-2 h-10 px-1 border-b-2 border-gray-300 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 focus-within:border-rose-800 [&::-webkit-details-marker]:hidden">
          <span> Categorias </span>
          <span className="transition-transform group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </summary>

        <div className="z-50 w-64 divide-y divide-gray-200 rounded border border-gray-300 bg-white shadow-lg group-open:absolute group-open:top-10">
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-sm text-gray-700">0 Selecionado</span>
            <button
              type="button"
              className="text-sm text-gray-700 underline transition-colors hover:text-gray-900"
            >
              Limpar
            </button>
          </div>

          <fieldset className="p-3">
            <div className="flex flex-col items-start gap-3">
              {["Massas", "Frango", "Carne"].map((cat, index) => (
                <label
                  key={index}
                  htmlFor={`categoria-${cat}`}
                  className="inline-flex items-center gap-3"
                >
                  <input
                    type="checkbox"
                    id={`categoria-${cat}`}
                    className="h-4 w-4 rounded border-gray-300 shadow-sm"
                  />
                  <span className="text-sm font-medium text-gray-700">{cat}</span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </details>

      {/* ⏱️ Tempo Total */}
      <details className="group relative cursor-pointer">
        <summary className="flex items-center gap-2 h-10 px-1 border-b-2 border-gray-300 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 focus-within:border-rose-800 [&::-webkit-details-marker]:hidden">
          <span> Tempo Total </span>
          <span className="transition-transform group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </summary>

        <div className="z-50 w-64 divide-y divide-gray-200 rounded border border-gray-300 bg-white shadow-lg group-open:absolute group-open:top-10">
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-sm text-gray-700">Tempo de Preparo</span>
            <button
              type="button"
              className="text-sm text-gray-700 underline transition-colors hover:text-gray-900"
            >
              Limpar
            </button>
          </div>

          <div className="flex items-center gap-3 p-3">
            <label htmlFor="Hours" className="flex flex-col text-sm text-gray-700">
              Horas
              <input
                type="number"
                id="Hours"
                defaultValue="00"
                className="mt-1 w-full rounded border border-gray-300 px-2 py-1 text-sm"
              />
            </label>

            <label htmlFor="Minutes" className="flex flex-col text-sm text-gray-700">
              Minutos
              <input
                type="number"
                id="Minutes"
                defaultValue="30"
                className="mt-1 w-full rounded border border-gray-300 px-2 py-1 text-sm"
              />
            </label>
          </div>
        </div>
      </details>
    </div>
  );
}
