export default async function apiService() {
    try {
        const URL_API = "https://api-core-receitas.onrender.com";
        const response = await fetch(`${URL_API}/Receitas/ListarReceitas`, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error("Erro ao buscar dados da API");
        }

        const data = await response.json();
        console.log(data);

        return data;
    } catch (error) {
        console.error("Erro: Problemas ao tentar se comunicar com a API.", error);
        return null;
    }
}
