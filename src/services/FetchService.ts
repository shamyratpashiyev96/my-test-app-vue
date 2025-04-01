export async function postData(url: string, data: object) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (!response.ok) throw new Error(`Server error: ${response.status}`);

        return await response;
    } catch (error) {
        console.error("Error posting data:", error);
        throw error;
    }
}

export async function getData(url: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Server error: ${response.status}`);

        const res = await new Response(response.body).text()

        return JSON.parse(res);
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}