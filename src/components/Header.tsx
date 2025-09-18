import Filters from "./Filters";

export default function Header() {
    return (
        <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
                <a className="flex items-center" href="#">
                    <span className="sr-only">Home</span>
                    <h1 className="text-6xl">🍛</h1>
                    <h1 className="text-2xl font-bold mt-3">Receitas</h1>
                </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Global" className="hidden md:block">
                    <Filters />
                </nav>

                <div className="flex flex-wrap items-center gap-4">
                <div className="sm:flex sm:gap-4">
                    <a
                    className="rounded-md bg-yellow-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                    href="#"
                    >
                    Nova Receita
                    </a>
                </div>

                <div className="block md:hidden">
                    <button
                    className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </header>


    )
}