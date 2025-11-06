// ✅ Grid.tsx
import { useMemo } from "react";
import Card from "./Card";
import type { FilterRevenues } from "../types/FilterRevenues";
import { useGetAllRevenues } from "../services/useGetAllRevenues";
import Loading from "./Loading";

export default function Grid() {
  const filters: FilterRevenues = useMemo(
    () => ({
      nome: "",
      tempo: "",
      tipoReceita: "",
    }),
    []
  );

  const { data, isLoading, isError } = useGetAllRevenues(filters);

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
