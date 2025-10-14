import { seePreparation } from "../handlers/seePreparation"

export default function Card() {
    return (
        <a href="#" className="relative block rounded-tr-3xl border border-gray-100">
            <span className="absolute -top-px -right-px rounded-tr-3xl rounded-bl-3xl bg-rose-800 px-6 py-4 font-medium tracking-widest text-white uppercase"> Salvar </span>
            <img src="https://images.unsplash.com/photo-1571175534150-72cd2b5a6039?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Food Image" className="h-80 w-full rounded-tr-3xl object-cover"/>
            <div className="p-4 text-center">
                <strong className="text-xl font-medium text-gray-900"> Macarrão da Quel </strong>
                <div className="mt-2">
                    <div className="mt-2 flex items-center gap-8 text-xs">
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-timer-icon lucide-timer"><line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/></svg>
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Tempo</p>
                                <p className="font-medium">00:30</p>
                            </div>
                        </div>
                        <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-utensils-icon lucide-utensils"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Tipo</p>
                                <p className="font-medium">Massa</p>
                            </div>
                        </div>
                        </div>
                    </div>
                <span className="mt-4 block rounded-md border border-yellow-600 bg-yellow-600 px-5 py-3 text-sm font-medium tracking-widest text-white uppercase transition-colors hover:bg-white hover:text-yellow-600" onClick={() => seePreparation()} >
                    Veja o preparo
                </span>
            </div>
        </a>
    )
}