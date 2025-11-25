import { keepPreviousData, useQuery } from "@tanstack/react-query";
import type { PreparationMode } from "../types/PreparationMode";
import { api } from "./apiService";

export function useGetPreparationMode(idReceita: number) {
    return useQuery<PreparationMode>({
        queryKey: ['modos-preparo', idReceita],
        queryFn: async () => {
            return await api.get(`${import.meta.env.VITE_URL_API}/ModoPreparo/ObterModoPreparo?idReceita=${idReceita}`)
        },
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5,
    });
}