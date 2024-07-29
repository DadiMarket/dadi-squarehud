export async function fetchNui(eventName, data) {
    try {
        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data)
        }

        const resourceName = window.GetParentResourceName
            ? window.GetParentResourceName()
            : "dadi-squarehud"

        const resp = await fetch(`https://${resourceName}/${eventName}`, options)
        const respFormatted = await resp.json()
        return respFormatted
    } catch (error) {
        console.error("An error occurred while fetching NUI:", error)
        throw error
    }
}