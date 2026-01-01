export type PreparationMode = {
    idPreparo: number;
    dataCriacao: Date;
    idReceita: number;
    qtdeEtapas: number;
    instrucoesPreparo:PreparationModeItem[];
    ingredientes: IngredientsItem[];
    tempo: string;
}

type PreparationModeItem = {
    etapa: number;
    descricao: string;
}

type IngredientsItem = {
    nome: string;
    quantidade: number;
}