import { URL_TRABAJOS } from "./urls";

export const getTrabajos = async () => {
    try{
        const response = await fetch(`${URL_TRABAJOS}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            cache: 'force-cache'
        })
        const data = await response.json()
        const {calatalogo4t} = data;
        return calatalogo4t;
    } catch (err) {
        console.error(err)
    }
}

export const postTrabajo = async (formData: any) => {
    try {
        const response = await fetch(`${URL_TRABAJOS}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const data = await response.json()
        return data;
    } catch (err: any) {
        console.error(err.message)
        return {error: err.message}
    }
}

export const getTrabajoById = async (id: string) => {
    try {
        const response = await fetch(`${URL_TRABAJOS}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        return data;
    } catch (err) {
        console.error(err)
    }
}