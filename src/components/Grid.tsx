// ✅ Grid.tsx
import { useMemo } from "react";
import Card from "./Card";
import type { FilterRecipes } from "../types/FilterRecipes";
import { useGetAllRecipes } from "../services/useGetAllRecipes";
import Loading from "./Loading";

export default function Grid() {
  const filters: FilterRecipes = useMemo(
    () => ({
      nome: "",
      tempo: "",
      tipoReceita: "",
    }),
    []
  );

  const { data, isLoading, isError } = useGetAllRecipes(filters);

  if (isLoading) return <Loading/>
  if (isError) return <div>Erro ao carregar receitas 😕</div>;

  return (
    <div className="py-16 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
      {data?.map((receita) => (
        <Card key={receita.idReceita} {...receita} />
      ))}
    </div>
  );
}
