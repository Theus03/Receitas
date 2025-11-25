import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api } from "./apiService";
import type { FilterRevenues } from "../types/FilterRevenues";
import type { Revenues } from "../types/Revenues";

export function useGetAllRevenues(filtros: FilterRevenues) {
    return useQuery<Revenues[]>({
        queryKey: ['receitas', JSON.stringify(filtros)],
        queryFn: async () => {
            return await api.post(`${import.meta.env.VITE_URL_API}/Receitas/ListarReceitas`, filtros);
        },
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5, 
    });
}