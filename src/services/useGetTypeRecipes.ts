import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { api } from "./apiService";
import type { TypeRecipes } from "../types/TypeRecipes";

export function useGetAllTypeRecipes() {
    return useQuery<TypeRecipes[]>({
        queryKey: ['tipos-receitas'],
        queryFn: async () => {
            return await api.get(`${import.meta.env.VITE_URL_API}/Receitas/ListarTiposReceitas`);
        },
        placeholderData: keepPreviousData,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 60 * 5, 
    });
}