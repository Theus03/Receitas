
export const api = {
    get: async(url: string) => {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Erro ao buscar dados.");
        return res.json();
    },
    post: async (url: string, body: any) => {
        const res = await fetch(url , {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
        });

        if (!res.ok) throw new Error("Erro ao enviar dados.");
        return res.json();
    }
}
