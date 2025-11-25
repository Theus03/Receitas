import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api } from "./apiService";
import type { TypeRevenues } from "../types/TypeRevenues";

export function useGetAllTypeRevenues() {
    return useQuery<TypeRevenues[]>({
        queryKey: ['tipos-receitas'],
        queryFn: async () => {
            return await api.get(`${import.meta.env.VITE_URL_API}/Receitas/ListarTiposReceitas`);
        },
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5, 
    });
}