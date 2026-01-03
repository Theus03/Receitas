import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api } from "./apiService";
import type { FilterRecipes } from "../types/FilterRecipes";
import type { Recipes } from "../types/Recipes";

export function useGetAllRecipes(filtros: FilterRecipes) {
    return useQuery<Recipes[]>({
        queryKey: ['receitas', JSON.stringify(filtros)],
        queryFn: async () => {
            return await api.post(`${import.meta.env.VITE_URL_API}/Receitas/ListarReceitas`, filtros);
        },
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5, 
    });
}