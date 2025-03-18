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